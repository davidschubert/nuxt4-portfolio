# 🚀 Deployment-Anleitung für pukalani.studio

## ✅ Vor dem Deployment

1. **Alle Änderungen committen:**

```bash
git add .
git commit -m "Performance & SEO Optimierungen + Hydration-Fix"
git push origin main
```

2. **Production Build erstellen:**

```bash
npm run build
```

## 📦 Was wird generiert?

Der Build erstellt folgende Dateien:

-   `.output/server/` - Node.js Server
-   `.output/public/` - Statische Assets (CSS, JS, Images)

## 🔧 Deployment auf Server

### Option 1: Manueller Upload (FTP/SFTP)

1. **Kompletten `.output` Ordner hochladen** zum Server
2. **Node.js auf dem Server starten:**

```bash
cd /pfad/zum/projekt
PORT=3000 node .output/server/index.mjs
```

### Option 2: Git-basiertes Deployment

1. **Code auf Server pullen:**

```bash
ssh user@pukalani.studio
cd /pfad/zum/projekt
git pull origin main
```

2. **Dependencies installieren & Build:**

```bash
npm ci
npm run build
```

3. **Server neustarten:**

```bash
pm2 restart nuxt4-portfolio
# oder
systemctl restart nuxt4-portfolio
```

### Option 3: PM2 Deployment (Empfohlen) ⭐

1. **PM2 Ecosystem bereits vorhanden:** `ecosystem.config.cjs` (App-Name: `pukalanistudio`)

2. **Automatisches Deployment-Script verwenden:**

```bash
# Auf dem Server ausführen:
cd /path/to/project
SITE_DIRECTORY=$(pwd) BRANCH=main ./deploy-production.sh
```

Das Script führt automatisch aus:

-   Git Pull & Reset
-   NPM Dependencies installieren
-   Cache leeren
-   Production Build erstellen
-   PM2 neu starten
-   Build-Validierung

**Wichtig:** Das Script nutzt:

-   Node 22 LTS (via NVM)
-   PM2-App-Name: `pukalanistudio`
-   Port 3000 (definiert in `ecosystem.config.cjs`)
-   Cluster-Modus für maximale Performance

## 🔍 Nach dem Deployment prüfen

1. **Server-Logs checken:**

```bash
pm2 logs nuxt4-portfolio
# oder
journalctl -u nuxt4-portfolio -f
```

2. **Browser-Test:**

-   https://pukalani.studio/best
-   Console auf Fehler prüfen
-   Lighthouse-Score testen

## 🐛 Troubleshooting

### Problem: 404 für CSS/JS Assets

**Ursache:** Alter Build auf dem Server  
**Lösung:** `.output` Ordner komplett neu hochladen

### Problem: 502 Bad Gateway bei Bildern

**Ursache:** Nuxt Image läuft nicht oder Sharp fehlt  
**Lösung:**

```bash
npm install --include=optional sharp
npm run build
```

### Problem: Server startet nicht

**Ursache:** Port bereits belegt  
**Lösung:**

```bash
# Prozess finden und beenden
lsof -i :3000
kill -9 <PID>
# oder
pkill -f "node .output"
```

## 📊 Aktueller Build-Status

-   ✅ SEO: Vollständig optimiert
-   ✅ Performance: Brotli/Gzip, CSS-Minification
-   ✅ Accessibility: WCAG 2.1 AA konform
-   ✅ Images: AVIF/WebP Support
-   ✅ Hydration: Fehlerlos

## 🔐 Nginx-Konfiguration (falls verwendet)

```nginx
server {
    server_name pukalani.studio;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Statische Assets direkt ausliefern (Optional)
    location /_nuxt/ {
        alias /pfad/zum/projekt/.output/public/_nuxt/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 📝 Wichtige Notizen

-   **Build-Zeit:** ~4-6 Sekunden
-   **Output-Größe:** ~22 MB (unkomprimiert), ~9 MB (gzip)
-   **Node Version:** 22.18.0 oder höher
-   **PM2 empfohlen** für Prozess-Management

## 🎯 Nächste Schritte

1. Build erstellen: `npm run build`
2. `.output` Ordner auf Server hochladen
3. Server neu starten
4. https://pukalani.studio/best testen
5. Lighthouse-Score validieren
