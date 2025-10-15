# ✅ Pre-Deployment Checklist

## 🔍 Vor dem Deployment prüfen:

### 1. Code-Qualität

-   [ ] Alle Änderungen committet und gepusht
-   [ ] Keine Console-Errors im Dev-Mode
-   [ ] Keine Linter-Fehler

### 2. Build-Test lokal

```bash
# Lokalen Production-Build testen
npm run build
PORT=3001 node .output/server/index.mjs
# Browser: http://localhost:3001/best öffnen
```

-   [ ] Build erfolgreich ohne Fehler
-   [ ] Seite lädt korrekt auf localhost:3001
-   [ ] Keine 404-Fehler für CSS/JS
-   [ ] Bilder laden korrekt

### 3. Performance-Check

-   [ ] Lighthouse Score > 90 (Performance)
-   [ ] Keine Hydration-Mismatches
-   [ ] CSS wird geladen (kein MIME-Type-Error)
-   [ ] Images werden optimiert (\_ipx funktioniert)

### 4. SEO-Check

-   [ ] Meta Description vorhanden
-   [ ] Canonical URL korrekt
-   [ ] Open Graph Tags vollständig
-   [ ] Structured Data validiert

### 5. Accessibility

-   [ ] WCAG 2.1 AA Kontraste erfüllt
-   [ ] Keyboard-Navigation funktioniert
-   [ ] Screen-Reader-freundlich

## 🚀 Deployment durchführen

### Option A: Automatisches Deployment (Server)

```bash
# Auf dem Server ausführen:
SITE_DIRECTORY=/path/to/project BRANCH=main ./deploy-production.sh
```

### Option B: Manuelles Deployment

```bash
# 1. Auf Server einloggen
ssh user@pukalani.studio

# 2. Projekt aktualisieren
cd /path/to/project
git pull origin main

# 3. Build erstellen
npm ci
npm run build

# 4. PM2 neu starten
pm2 delete pukalanistudio || true
pm2 start ecosystem.config.cjs
pm2 save
```

## 📊 Nach dem Deployment prüfen

### 1. Server-Status

```bash
pm2 list
pm2 logs pukalanistudio --lines 50
```

-   [ ] PM2-Prozess läuft (`online`)
-   [ ] Keine Errors in den Logs
-   [ ] Port 3000 ist gebunden

### 2. Live-Site testen

-   [ ] https://pukalani.studio/best lädt ohne Fehler
-   [ ] Keine 404-Fehler in Browser-Console
-   [ ] CSS wird korrekt geladen
-   [ ] Bilder werden optimiert ausgeliefert
-   [ ] Navigation funktioniert
-   [ ] Kontaktformular erreichbar

### 3. Performance validieren

```bash
# Lighthouse-Test auf Live-Site:
lighthouse https://pukalani.studio/best --view
```

-   [ ] Performance: > 90
-   [ ] Accessibility: > 95
-   [ ] Best Practices: > 95
-   [ ] SEO: 100

## 🐛 Troubleshooting

### Problem: 404 für CSS/JS nach Deployment

**Symptom:** `Refused to apply style... MIME type 'text/html'`

**Lösung:**

```bash
# Auf Server:
cd /path/to/project
rm -rf .output .nuxt
npm run build
pm2 restart pukalanistudio
```

### Problem: 502 Bad Gateway für Bilder

**Symptom:** `GET /_ipx/... 502 (Bad Gateway)`

**Ursache:** Sharp nicht installiert oder @nuxt/image nicht konfiguriert

**Lösung:**

```bash
# Auf Server:
npm install --include=optional sharp
npm run build
pm2 restart pukalanistudio
```

### Problem: PM2-Prozess startet nicht

**Symptom:** PM2 zeigt `errored` oder `stopped`

**Lösung:**

```bash
# Logs prüfen:
pm2 logs pukalanistudio --err --lines 100

# Manuell testen:
PORT=3000 node .output/server/index.mjs
# Fehler beheben, dann PM2 neu starten
```

### Problem: Port bereits belegt

**Symptom:** `EADDRINUSE: address already in use :::3000`

**Lösung:**

```bash
# Prozess finden und beenden:
lsof -i :3000
kill -9 <PID>
# oder
pm2 delete all
pm2 start ecosystem.config.cjs
```

## 📈 Monitoring

### PM2 Monitoring

```bash
# Real-time Monitoring
pm2 monit

# Prozess-Liste
pm2 list

# Logs anzeigen
pm2 logs pukalanistudio

# Logs filtern
pm2 logs pukalanistudio --err
```

### Nginx-Logs (falls verwendet)

```bash
# Access-Log
tail -f /var/log/nginx/access.log

# Error-Log
tail -f /var/log/nginx/error.log
```

## 🔄 Rollback-Plan

Falls das Deployment fehlschlägt:

```bash
# 1. Auf vorherige Version zurücksetzen
git reset --hard HEAD~1

# 2. Build neu erstellen
npm ci
npm run build

# 3. PM2 neu starten
pm2 restart pukalanistudio
```

## 📝 Wichtige Dateien

-   **ecosystem.config.cjs** - PM2-Konfiguration
-   **deploy-production.sh** - Automatisches Deployment-Script
-   **.output/** - Production-Build (NICHT ins Git)
-   **nuxt.config.ts** - Nuxt-Konfiguration

## 🎯 Erfolgs-Kriterien

Deployment gilt als erfolgreich, wenn:

1. ✅ PM2-Prozess läuft (`pm2 list` zeigt `online`)
2. ✅ Live-Site lädt ohne Console-Errors
3. ✅ Alle Assets (CSS/JS/Bilder) laden korrekt
4. ✅ Lighthouse Performance > 90
5. ✅ Keine Server-Errors in PM2-Logs

---

**Letzte Aktualisierung:** Oktober 2024  
**Nuxt Version:** 4.1.3  
**Node Version:** 22.18.0
