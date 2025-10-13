# Performance Verbesserungen - Aufgabenliste

Basierend auf dem DevTools Performance Audit vom 13. Oktober 2025

---

## 📊 Status Übersicht

-   **Gesamt-Score**: 95/100 ✅ Exzellent
-   **Kritische Probleme**: 0
-   **Mittlere Probleme**: 2
-   **Niedrige Priorität**: 2

---

## 🔴 Phase 1: Sofortige Fixes (5-20 Minuten)

### ✅ Task 1.1: Favicon.ico hinzufügen

**Problem**: Production wirft 404-Fehler für `/favicon.ico`

**Datei**: `public/favicon.ico`

**Schritte**:

-   [x] Prüfen, ob `favicon.ico` im `public/` Ordner existiert
-   [x] Falls nicht vorhanden: ICO-Datei erstellen oder von `icon.svg` konvertieren
-   [x] Datei nach `public/favicon.ico` kopieren
-   [x] Build testen und deployen ✅ Production-Build funktioniert!

**Code/Kommandos**:

```bash
# Option 1: SVG zu ICO konvertieren (mit Online-Tool oder ImageMagick)
# https://cloudconvert.com/svg-to-ico

# Option 2: Bestehende ICO verwenden (falls vorhanden)
cp path/to/favicon.ico public/favicon.ico

# Testen
npm run build
npm run preview
```

**Erfolgskriterium**: Keine 404-Fehler mehr für `/favicon.ico` in der Browser-Console

**Geschätzter Aufwand**: 5 Minuten

---

### ✅ Task 1.2: Picsum.photos Redirect-Problem lösen

**Problem**: Externe Bild-URLs führen zu 302 Redirects und verlangsamen Ladezeiten

**Betroffene Seiten**:

-   `/chatgpt` (1280x720 Bild)
-   `/claude` (1920x1080 Bild)

**Option A: Direkte CDN-URLs verwenden**

Schritte:

-   [x] ChatGPT-Seite öffnen: `app/pages/chatgpt/index.vue`
-   [x] Picsum-URL durch direkte Fastly-URL ersetzen
-   [x] Claude-Seite öffnen: `app/pages/claude/index.vue`
-   [x] Picsum-URL durch direkte Fastly-URL ersetzen
-   [x] Beide Seiten testen ✅ Keine Redirects mehr!

**Code-Änderung** (`app/pages/chatgpt/index.vue`):

```vue
<!-- Vorher -->
<img src="https://picsum.photos/1280/720" alt="ChatGPT">

<!-- Nachher -->
<img src="https://fastly.picsum.photos/id/937/1280/720.jpg?hmac=rWE7l_gvQfdyitZk-Cc90oeMIASGfaSG0Y4KwTvk7DM" alt="ChatGPT">
```

**Code-Änderung** (`app/pages/claude/index.vue`):

```vue
<!-- Vorher -->
<img src="https://picsum.photos/1920/1080" alt="Claude">

<!-- Nachher -->
<img src="https://fastly.picsum.photos/id/316/1920/1080.jpg?hmac=ePKjLT9NShF6345zDYLbv-XLsJCQdGDzDv9JvWaVxmw" alt="Claude">
```

**Option B: Eigene Bilder verwenden (empfohlen)**

Schritte:

-   [ ] Passende Bilder auswählen (ChatGPT-themed und Claude-themed)
-   [ ] Bilder optimieren (siehe Phase 2)
-   [ ] In `public/images/` ablegen
-   [ ] Vue-Komponenten aktualisieren

**Code-Änderung**:

```vue
<!-- Vorher -->
<img src="https://picsum.photos/1280/720" alt="ChatGPT">

<!-- Nachher -->
<img src="/images/chatgpt-hero.jpg" alt="ChatGPT">
```

**Erfolgskriterium**: Keine 302 Redirects mehr in Network-Tab

**Geschätzter Aufwand**: 10-15 Minuten

---

## 🟡 Phase 2: Mittelfristige Optimierungen (30-60 Minuten)

### ✅ Task 2.1: Bilder optimieren und moderne Formate nutzen

**Problem**: Bilder könnten 35-48 kB kleiner sein

**Potenzial**:

-   Claude-Seite: 35.5 kB Einsparung
-   ChatGPT-Seite: ~40 kB Einsparung (geschätzt)

**Status**: ✅ **ABGESCHLOSSEN mit @nuxt/image!**

**Schritte**:

-   [x] **2.1.1**: ✅ Bilder lokal gespeichert und @nuxt/image konfiguriert

    -   6 Bilder von fastly.picsum.photos heruntergeladen
    -   Gespeichert in `public/images/`
    -   @nuxt/image in `nuxt.config.ts` konfiguriert mit WebP-Format

-   [x] **2.1.2**: ✅ Automatische WebP-Konvertierung mit @nuxt/image

    -   Nuxt Image IPX generiert automatisch WebP
    -   Quality: 85%, responsive Größen (xs, sm, md, lg, xl, xxl)
    -   Beispiel: `/_ipx/f_webp&q_85&s_1536x864/images/chatgpt-hero.jpg`

-   [x] **2.1.3**: ✅ `<NuxtImg>` Komponente implementiert

    -   ChatGPT-Seite: 1 Hero-Bild mit NuxtImg
    -   Claude-Seite: 1 Hero-Bild + 4 Portfolio-Bilder mit NuxtImg
    -   Alle mit `format="webp"`, `quality="85"`, responsive `sizes`

-   [x] **2.1.4**: ✅ Responsive Bilder automatisch generiert

    -   Nuxt Image generiert automatisch verschiedene Größen
    -   `sizes`-Attribut für optimale Viewport-Anpassung
    -   Beispiel: `sizes="xs:100vw sm:100vw md:50vw lg:33vw"`

-   [x] **2.1.5**: ✅ Performance getestet und verifiziert

    -   Beide Seiten erfolgreich getestet (localhost:3000)
    -   Alle Bilder werden als WebP mit 85% Quality geladen
    -   Keine 302-Redirects mehr
    -   Automatische Größenanpassung funktioniert

**Erfolgskriterium**:

-   Bilder sind 30-50% kleiner
-   WebP/AVIF werden in modernen Browsern geladen
-   Fallback funktioniert in älteren Browsern

**Geschätzter Aufwand**: 30-45 Minuten

---

### ✅ Task 2.2: Nuxt Image Module integrieren (Alternative zu 2.1)

**Vorteil**: Automatische Optimierung und responsive Bilder

**Schritte**:

-   [ ] **2.2.1**: Nuxt Image installieren

    ```bash
    npm install --save @nuxt/image
    ```

-   [ ] **2.2.2**: Nuxt Config aktualisieren

    **Datei**: `nuxt.config.ts`

    ```typescript
    export default defineNuxtConfig({
        modules: ["@nuxt/image"],
        image: {
            formats: ["webp", "avif", "jpg"],
            quality: 85,
            screens: {
                xs: 320,
                sm: 640,
                md: 768,
                lg: 1024,
                xl: 1280,
                xxl: 1536,
            },
        },
    });
    ```

-   [ ] **2.2.3**: Komponenten aktualisieren

    **Datei**: `app/pages/chatgpt/index.vue`

    ```vue
    <template>
        <NuxtImg
            src="/images/chatgpt-hero.jpg"
            alt="ChatGPT"
            width="1280"
            height="720"
            format="webp"
            quality="85"
            loading="eager"
            :placeholder="[1280, 720, 10, 5]"
        />
    </template>
    ```

-   [ ] **2.2.4**: Build testen

**Erfolgskriterium**: Automatische Bildoptimierung funktioniert

**Geschätzter Aufwand**: 20-30 Minuten

---

### ✅ Task 2.3: Render Delay optimieren

**Problem**: Render Delay beträgt 69-232 ms (könnte weiter reduziert werden)

**Status**: ✅ **ABGESCHLOSSEN** (Basis-Optimierungen umgesetzt)

**Schritte**:

-   [x] **2.3.1**: ✅ Critical CSS bereits optimiert

    -   Nuxt hat bereits `features.inlineStyles: true` aktiviert
    -   Tailwind CSS wird optimal inline gerendert
    -   Keine zusätzlichen Plugins notwendig

-   [x] **2.3.2**: ✅ Font Display ist bereits optimal

    -   Projekt verwendet Tailwind CSS System-Fonts
    -   Keine benutzerdefinierten Webfonts → perfekt für Performance!
    -   Kein FOUT (Flash of Unstyled Text)

-   [x] **2.3.3**: ✅ Wichtige Ressourcen optimiert

    -   Hero-Bilder mit `loading="eager"` und `fetchpriority="high"`
    -   Cache-Headers für Bilder: `max-age=31536000, immutable`
    -   Asset-Kompression aktiviert: `compressPublicAssets: true`
    -   Vendor-Code in separate Chunks: `vue`, `vue-router`
    -   esbuild als schneller Minifier konfiguriert

**Implementierte Optimierungen**:

```typescript
// nuxt.config.ts
nitro: {
    compressPublicAssets: true,
    routeRules: {
        "/_ipx/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } },
        "/images/**": { headers: { "cache-control": "public, max-age=31536000, immutable" } }
    }
},
vite: {
    build: {
        minify: "esbuild",
        rollupOptions: {
            output: { manualChunks: { vendor: ["vue", "vue-router"] } }
        }
    }
}
```

**Erfolgskriterium**: ✅ Cache-Headers funktionieren, Assets werden optimiert ausgeliefert

**Geschätzter Aufwand**: 30 Minuten ✅ **ERLEDIGT**

---

## 🟢 Phase 3: Langfristige Optimierungen (1-3 Stunden)

### ✅ Task 3.1: CDN für statische Assets einrichten

**Schritte**:

-   [ ] **3.1.1**: CDN-Provider auswählen (Cloudflare, Vercel, etc.)
-   [ ] **3.1.2**: CDN für `/images`, `/fonts`, `/_nuxt` konfigurieren
-   [ ] **3.1.3**: Nuxt Config für CDN-Base-URL anpassen

    **Datei**: `nuxt.config.ts`

    ```typescript
    export default defineNuxtConfig({
        app: {
            cdnURL: "https://cdn.pukalani.studio",
        },
    });
    ```

-   [ ] **3.1.4**: Cache-Headers optimieren

    ```typescript
    export default defineNuxtConfig({
        nitro: {
            compressPublicAssets: true,
            routeRules: {
                "/_nuxt/**": {
                    headers: { "cache-control": "max-age=31536000, immutable" },
                },
                "/images/**": {
                    headers: { "cache-control": "max-age=31536000" },
                },
            },
        },
    });
    ```

-   [ ] **3.1.5**: Deployment testen

**Erfolgskriterium**: Assets werden über CDN ausgeliefert, bessere Cache-Hits

**Geschätzter Aufwand**: 1-2 Stunden

---

### ✅ Task 3.2: Performance Monitoring einrichten

**Schritte**:

-   [ ] **3.2.1**: Tool auswählen (Vercel Analytics, Sentry, Plausible, etc.)
-   [ ] **3.2.2**: Real User Monitoring (RUM) implementieren

    **Beispiel**: Vercel Speed Insights

    ```bash
    npm install --save @vercel/speed-insights
    ```

    **Datei**: `app.vue`

    ```vue
    <script setup>
    import { SpeedInsights } from "@vercel/speed-insights/nuxt";
    </script>

    <template>
        <div>
            <NuxtPage />
            <SpeedInsights />
        </div>
    </template>
    ```

-   [ ] **3.2.3**: Core Web Vitals Tracking

    **Datei**: `plugins/web-vitals.client.ts`

    ```typescript
    export default defineNuxtPlugin(() => {
        if (typeof window !== "undefined") {
            import("web-vitals").then(({ onCLS, onFID, onLCP }) => {
                onCLS(console.log);
                onFID(console.log);
                onLCP(console.log);
            });
        }
    });
    ```

-   [ ] **3.2.4**: Dashboard einrichten und Alerts konfigurieren

**Erfolgskriterium**: Kontinuierliches Performance-Monitoring aktiv

**Geschätzter Aufwand**: 1-2 Stunden

---

### ✅ Task 3.3: Lazy Loading für Below-the-Fold Content

**Status**: ✅ **ABGESCHLOSSEN**

**Schritte**:

-   [x] **3.3.1**: ✅ Kontakt-Formular lazy laden

    -   `<ContactForm />` → `<LazyContactForm />` in `app/pages/claude/index.vue`
    -   Nuxt erstellt automatisch separaten Chunk
    -   Wird erst geladen, wenn im Viewport sichtbar

-   [x] **3.3.2**: ✅ Bilder außerhalb des Viewports mit loading="lazy"

    -   Portfolio-Bilder haben bereits `loading="lazy"`
    -   Hero-Bilder haben `loading="eager"` und `fetchpriority="high"` (korrekt!)
    -   Alle Bilder optimal konfiguriert

-   [x] **3.3.3**: ✅ Intersection Observer nicht notwendig

    -   Nuxt's automatisches Lazy Loading reicht aus
    -   Browser-natives lazy loading für Bilder aktiv
    -   Optimal für Performance

**Erfolgskriterium**: ✅ Initial Load Size reduziert, besseres First Contentful Paint

**Geschätzter Aufwand**: 30 Minuten ✅ **ERLEDIGT**

---

## 📝 Testing Checklist

Nach jeder Phase sollte getestet werden:

### Lokaler Test

-   [ ] `npm run dev` - Development Build testen
-   [ ] Chrome DevTools öffnen
-   [ ] Network Tab überprüfen (keine 404, keine Redirects)
-   [ ] Console überprüfen (keine Fehler)
-   [ ] Performance Tab - Lighthouse Score
-   [ ] Alle drei Seiten testen (/, /chatgpt, /claude)

### Production Test

-   [ ] `npm run build && npm run preview` - Production Build lokal testen
-   [ ] Deploy auf pukalani.studio
-   [ ] Chrome DevTools Performance Trace durchführen
-   [ ] LCP, CLS, TTFB messen und mit vorherigen Werten vergleichen
-   [ ] Cross-Browser Testing (Chrome, Firefox, Safari)
-   [ ] Mobile Testing (responsive)

---

## 📊 Erfolgsmetriken (Zielwerte nach allen Optimierungen)

| Metrik                | Aktuell            | Ziel     | Status           |
| --------------------- | ------------------ | -------- | ---------------- |
| **LCP**               | 89 ms (Production) | < 80 ms  | 🎯 Fast erreicht |
| **CLS**               | 0.00               | 0.00     | ✅ Perfekt       |
| **TTFB**              | 2 ms (Production)  | < 5 ms   | ✅ Exzellent     |
| **Total Requests**    | 15 (Production)    | < 15     | 🎯 Optimieren    |
| **404 Errors**        | 1 (favicon)        | 0        | ⚠️ Beheben       |
| **302 Redirects**     | 3 (picsum)         | 0        | ⚠️ Beheben       |
| **Image Size**        | ~200 KB            | < 150 KB | 🎯 Optimieren    |
| **Performance Score** | 95/100             | 98/100   | 🎯 Verbessern    |

---

## 🔗 Nützliche Resources

-   [Web.dev - Optimize LCP](https://web.dev/articles/optimize-lcp)
-   [Web.dev - Optimize CLS](https://web.dev/articles/optimize-cls)
-   [Nuxt Image Documentation](https://image.nuxt.com/)
-   [WebP/AVIF Converter - Squoosh](https://squoosh.app/)
-   [Chrome DevTools Performance](https://developer.chrome.com/docs/devtools/performance/)

---

## 📅 Zeitplan

| Phase   | Aufwand | Empfohlen bis    |
| ------- | ------- | ---------------- |
| Phase 1 | 20 Min  | Heute/Morgen     |
| Phase 2 | 1-2 Std | Diese Woche      |
| Phase 3 | 2-4 Std | Nächste 2 Wochen |

---

## ✅ Abschluss-Checklist

-   [x] ✅ Alle Phase 1 Tasks abgeschlossen
    -   [x] Favicon.ico geprüft (bereits vorhanden)
    -   [x] Picsum.photos Redirects behoben (direkte Fastly-URLs)
    -   [x] Bilder lokal gespeichert
-   [x] ✅ Alle Phase 2 Tasks abgeschlossen
    -   [x] Bildoptimierung mit @nuxt/image
    -   [x] WebP-Format automatisch generiert
    -   [x] Render Delay optimiert (Cache-Headers, fetchpriority)
-   [x] ✅ Ausgewählte Phase 3 Tasks abgeschlossen
    -   [x] Lazy Loading implementiert (Kontaktformular, Bilder)
    -   [x] Cache-Headers für Assets konfiguriert
    -   [ ] CDN-Setup (abhängig von Hosting-Provider)
    -   [ ] Performance Monitoring (abhängig von Tool-Wahl)
-   [ ] Finale Performance-Tests durchgeführt (empfohlen nach Deployment)
-   [x] ✅ Dokumentation aktualisiert
-   [ ] Team über Änderungen informiert (falls relevant)
-   [ ] Monitoring Dashboard eingerichtet (optional)

---

**Erstellt am**: 13. Oktober 2025  
**Basierend auf**: DevTools Performance Audit  
**Letztes Update**: 13. Oktober 2025
