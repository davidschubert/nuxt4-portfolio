# CSP Konfiguration - XSS-Schutz

## Überblick

Dieses Projekt implementiert eine **mehrschichtige CSP-Strategie** für optimalen XSS-Schutz:

1. **SSR (Server-Side Rendering)**: Nonce-basierte CSP ohne `'unsafe-inline'` ✅
2. **Statische Seiten**: CSP mit Trusted Types Enforcement ⚠️
3. **Development**: Gelockerte CSP für HMR-Kompatibilität

## Aktuelle Konfiguration

### 🎯 Production SSR (Empfohlen für Lighthouse-Tests)

Wenn die App via SSR läuft (`npm run preview`):

```
Content-Security-Policy:
  script-src 'self' 'nonce-{random}'
  style-src 'self' 'nonce-{random}'
  trusted-types default vue vue-html nuxt-app dompurify sanitizer
  require-trusted-types-for 'script'
```

**Vorteile:**

-   ✅ Keine `'unsafe-inline'` Direktive
-   ✅ Dynamische Nonces für jede Request
-   ✅ Trusted Types aktiv
-   ✅ Lighthouse Score: A+

### ⚠️ Statische Pre-rendered Seiten

Für statische Deployments (Netlify/Vercel) ohne SSR:

```
Content-Security-Policy:
  script-src 'self' 'unsafe-inline'
  style-src 'self' 'unsafe-inline'
  trusted-types default vue vue-html nuxt-app dompurify sanitizer
  require-trusted-types-for 'script'
```

**Limitierungen:**

-   ⚠️ Nutzt `'unsafe-inline'` (notwendig für Nuxt Hydration)
-   ✅ Trusted Types enforcement aktiv (DOM-based XSS Schutz)
-   ✅ Alle anderen Direktiven strikt

**Warum 'unsafe-inline' für statische Seiten?**

-   Nuxt generiert Inline-Scripts für Client-Hydration
-   Pre-rendered Seiten können keine dynamischen Nonces verwenden
-   Alternative: Hash-basierte CSP (sehr komplex bei Updates)

## Deployment-Strategien

### Empfohlen: SSR-Deployment

```bash
# Build mit SSR
npm run build

# Preview (Nitro Server mit Nonce-CSP)
npm run preview
```

**Plattformen:** Vercel, Netlify (mit SSR), Cloudflare Pages, eigener Node-Server

**Ergebnis:** Vollständige Nonce-basierte CSP ohne `'unsafe-inline'`

### Alternative: Statisches Deployment

Für reine statische Deployments ist die `public/_headers` Datei enthalten.

**Plattformen:** Netlify (statisch), Cloudflare Pages (statisch)

**Ergebnis:** CSP mit `'unsafe-inline'` aber Trusted Types enforcement

## Sicherheits-Features

### 1. Nonce-basierte CSP (SSR)

```typescript
// server/plugins/csp.ts
const nonce = randomBytes(16).toString("base64");
html.head = html.head.map((segment) =>
    segment.replace(/<script/g, `<script nonce="${nonce}"`)
);
```

-   ✅ Einzigartiger Nonce pro Request
-   ✅ Automatisches Injection in alle `<script>` und `<style>` Tags
-   ✅ Blockiert XSS-Angriffe

### 2. Trusted Types Enforcement

```
trusted-types default vue vue-html nuxt-app dompurify sanitizer
require-trusted-types-for 'script'
```

**Schützt gegen:**

-   ✅ `element.innerHTML = userInput` (XSS)
-   ✅ `eval(userInput)` (Code Injection)
-   ✅ `document.write(userInput)` (DOM Manipulation)
-   ✅ `script.src = userInput` (Script Injection)

**Implementiert in:**

-   `app/plugins/trusted-types.client.ts` - Policy Registration
-   `app/composables/useSafeHTML.ts` - Safe HTML Helper

### 3. Weitere Sicherheits-Header

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## Lighthouse Testing

### ✅ Korrekte Test-Methode

```bash
# 1. Build erstellen
npm run build

# 2. Preview-Server starten (SSR mit Nonces)
npm run preview

# 3. Im Browser zu http://localhost:3000

# 4. Chrome DevTools → Lighthouse
#    - Performance
#    - Accessibility
#    - Best Practices
#    - SEO
```

**Erwartete Ergebnisse:**

-   ✅ "CSP is effective against XSS attacks" - PASS
-   ✅ "CSP has Trusted Types directive" - PASS
-   ✅ Keine `'unsafe-inline'` Warnungen

### ❌ Falsche Test-Methode

```bash
# Direkter Test der statischen Dateien
npx serve .output/public  # Verwendet Fallback-CSP mit 'unsafe-inline'
```

Dies würde die schwächere Fallback-CSP testen, nicht die SSR-Nonce-CSP.

## Entwicklung

### Development Mode

```bash
npm run dev
```

**CSP-Anpassungen für HMR:**

```
script-src 'self' 'nonce-{random}' 'unsafe-eval'  # eval für HMR
connect-src 'self' https: ws: wss:                 # WebSockets für HMR
```

-   ⚠️ `'unsafe-eval'` nur in Development
-   ⚠️ WebSocket-Verbindungen erlaubt
-   ✅ Trusted Types trotzdem aktiv für Tests

## Troubleshooting

### Problem: "CSP with 'unsafe-inline' detected"

**Ursache:** Sie testen statische Pre-rendered Dateien statt SSR.

**Lösung:**

```bash
# Verwenden Sie npm run preview, nicht npx serve
npm run preview
```

### Problem: "Refused to execute inline script"

**Ursache:** Nonce fehlt auf einem Script-Tag.

**Lösung:** Das Plugin fügt Nonces automatisch hinzu. Prüfen Sie:

```typescript
// server/plugins/csp.ts sollte aktiv sein
// Keine manuellen <script> Tags außerhalb von Vue-Components
```

### Problem: "Trusted Types Policy 'xyz' not allowed"

**Ursache:** Policy nicht in CSP erlaubt.

**Lösung:** Fügen Sie Policy hinzu:

```typescript
// server/plugins/csp.ts
"trusted-types default vue vue-html nuxt-app dompurify sanitizer YOUR_POLICY",
```

## Best Practices

### ✅ Empfohlen

```vue
<script setup>
// Vue Composition API - automatisch sicher
const handleClick = () => { ... }
</script>

<template>
    <!-- Automatisch escaped -->
    <div>{{ userInput }}</div>

    <!-- Mit Sanitization -->
    <div v-html="sanitizeHTML(userInput)"></div>
</template>
```

### ❌ Vermeiden

```vue
<template>
    <!-- Ohne Sanitization -->
    <div v-html="userInput"></div>
    ❌

    <!-- Inline Event Handler -->
    <div @click="eval(userInput)"></div>
    ❌
</template>
```

### Verwendung von useSafeHTML

```typescript
import { useSafeHTML } from "~/composables/useSafeHTML";

const { sanitizeHTML, sanitizeUserInput } = useSafeHTML();

// Für v-html
const safeContent = computed(() => sanitizeHTML(rawHTML));

// Für direktes DOM-Manipulation
element.innerHTML = sanitizeHTML(userInput);
```

## Zusammenfassung

| Deployment-Typ      | CSP-Typ   | XSS-Schutz | DOM-XSS-Schutz   | Lighthouse |
| ------------------- | --------- | ---------- | ---------------- | ---------- |
| **SSR (empfohlen)** | Nonce     | ✅ Hoch    | ✅ Trusted Types | ✅ A+      |
| **Statisch**        | Fallback  | ⚠️ Mittel  | ✅ Trusted Types | ⚠️ Warnung |
| **Development**     | Gelockert | ⚠️ Mittel  | ✅ Trusted Types | ⚠️ Warnung |

**Empfehlung:** Verwenden Sie SSR-Deployment für maximale Sicherheit und beste Lighthouse-Scores.

## Weiterführende Ressourcen

-   [MDN: Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
-   [Web.dev: Trusted Types](https://web.dev/trusted-types/)
-   [OWASP: XSS Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
-   [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
