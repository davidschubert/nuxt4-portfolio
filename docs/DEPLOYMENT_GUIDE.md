# Deployment-Guide: Performance-Optimierungen

## Übersicht

Dieser Guide führt Sie durch das Deployment der Performance-Optimierungen, die die Server Response Time von **697 ms auf unter 200 ms** reduzieren sollen.

**Erwartete Einsparungen:** ~600 ms durch Nginx-Optimierung, PM2-Clustering und CSS-Inlining.

---

## 🚀 Phase 1: Code-Änderungen vorbereiten (Lokal)

### 1.1 Änderungen prüfen

```bash
# Zeige alle Änderungen an
git status
git diff

# Wichtige geänderte Dateien:
# - nuxt.config.ts (Nitro + CSS Optimierungen)
# - ecosystem.config.cjs (PM2 Cluster-Modus)
# - nginx.conf.example (Neue Nginx-Konfiguration)
```

### 1.2 Logs-Verzeichnis erstellen

```bash
# Für PM2 Logs
mkdir -p logs
echo "logs/" >> .gitignore
```

### 1.3 Commit & Push

```bash
git add .
git commit -m "perf: Optimize server response time

- Add PM2 cluster mode for better CPU utilization
- Enable Nitro preset for node-server
- Add experimental.inlineSSRStyles for CSS inlining
- Optimize route rules with prerendering
- Create nginx.conf.example with static file serving"

git push origin main
```

---

## 🔧 Phase 2: Nginx-Konfiguration auf Server (SSH)

### 2.1 SSH auf Hetzner-Server

```bash
ssh user@pukalani.studio
# oder
ssh user@YOUR_SERVER_IP
```

### 2.2 Backup der aktuellen Nginx-Config

```bash
# Sicherheitskopie erstellen
sudo cp /etc/nginx/sites-available/pukalani.studio \
       /etc/nginx/sites-available/pukalani.studio.backup.$(date +%Y%m%d)

# Backup verifizieren
ls -la /etc/nginx/sites-available/pukalani.studio.backup*
```

### 2.3 Neue Nginx-Config installieren

**Option A: Manuell übertragen**

```bash
# Auf lokalem Rechner:
scp nginx.conf.example user@pukalani.studio:/tmp/nginx.conf.new

# Auf Server:
ssh user@pukalani.studio
sudo mv /tmp/nginx.conf.new /etc/nginx/sites-available/pukalani.studio
```

**Option B: Direkt auf Server bearbeiten**

```bash
# Auf Server:
sudo nano /etc/nginx/sites-available/pukalani.studio

# Inhalt aus nginx.conf.example einfügen
# WICHTIG: Pfade anpassen (siehe unten)
```

### 2.4 Pfade in Nginx-Config anpassen

Öffnen Sie die Nginx-Config:

```bash
sudo nano /etc/nginx/sites-available/pukalani.studio
```

**Kritische Pfade, die angepasst werden müssen:**

```nginx
# Zeile ~15: Root-Verzeichnis
root /var/www/pukalani/.output/public;
# ↑ Ersetzen mit Ihrem tatsächlichen Deployment-Pfad

# Zeile ~10: SSL-Zertifikate
ssl_certificate /etc/letsencrypt/live/pukalani.studio/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/pukalani.studio/privkey.pem;
# ↑ Prüfen, ob diese Pfade korrekt sind
```

### 2.5 Nginx-Config testen

```bash
# Syntax-Prüfung
sudo nginx -t

# Erwartete Ausgabe:
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful
```

**Bei Fehlern:**

```bash
# Fehler anzeigen
sudo nginx -t

# Backup wiederherstellen, falls nötig
sudo cp /etc/nginx/sites-available/pukalani.studio.backup.* \
       /etc/nginx/sites-available/pukalani.studio
```

### 2.6 Nginx neu laden

```bash
# Sanfter Reload (keine Downtime)
sudo systemctl reload nginx

# Status prüfen
sudo systemctl status nginx

# Logs prüfen
sudo tail -f /var/log/nginx/error.log
```

---

## 📦 Phase 3: Application Deployment

### 3.1 Code pullen und bauen

```bash
# Im Projekt-Verzeichnis auf dem Server
cd /var/www/pukalani  # Oder Ihr Pfad

# Deployment-Script ausführen
./deploy.sh

# Das Script führt automatisch aus:
# - git pull
# - npm ci
# - npm run build
# - PM2 restart mit Cluster-Modus
```

### 3.2 PM2 Status prüfen

```bash
# PM2 Dashboard
pm2 status

# Erwartete Ausgabe (Cluster-Modus):
# ┌────┬──────────────┬─────────┬──────┬───────┬──────────┐
# │ id │ name         │ mode    │ ↺    │ cpu   │ memory   │
# ├────┼──────────────┼─────────┼──────┼───────┼──────────┤
# │ 0  │ pukalanist.. │ cluster │ 0    │ 5%    │ 85.2mb   │
# │ 1  │ pukalanist.. │ cluster │ 0    │ 3%    │ 82.1mb   │
# │ 2  │ pukalanist.. │ cluster │ 0    │ 4%    │ 83.5mb   │
# │ 3  │ pukalanist.. │ cluster │ 0    │ 2%    │ 81.9mb   │
# └────┴──────────────┴─────────┴──────┴───────┴──────────┘

# Logs anschauen
pm2 logs pukalanistudio --lines 50
```

### 3.3 Health-Check

```bash
# Lokaler Request auf Server
curl -I http://127.0.0.1:3000/

# Erwartete Ausgabe:
# HTTP/1.1 200 OK
# Content-Type: text/html
# ...

# Externer Request
curl -I https://pukalani.studio/chatgpt

# Erwartung:
# HTTP/2 200
# content-encoding: gzip  # ✅ Nginx komprimiert
# cache-control: public, max-age=3600, must-revalidate
```

---

## 🧪 Phase 4: Performance-Tests

### 4.1 Server Response Time testen

```bash
# Auf lokalem Rechner:

# TTFB (Time To First Byte) messen
curl -w "@curl-format.txt" -o /dev/null -s https://pukalani.studio/chatgpt

# curl-format.txt erstellen:
cat > curl-format.txt << 'EOF'
time_namelookup:  %{time_namelookup}s\n
time_connect:     %{time_connect}s\n
time_appconnect:  %{time_appconnect}s\n
time_pretransfer: %{time_pretransfer}s\n
time_starttransfer: %{time_starttransfer}s (TTFB)\n
time_total:       %{time_total}s\n
size_download:    %{size_download} bytes\n
speed_download:   %{speed_download} bytes/sec\n
EOF

# Erwartung:
# time_starttransfer: < 0.200s (200ms) ✅
```

### 4.2 Gzip/Brotli Kompression prüfen

```bash
# HTML-Kompression testen
curl -H "Accept-Encoding: gzip" -I https://pukalani.studio/chatgpt

# Erwartung:
# content-encoding: gzip ✅
```

### 4.3 Static File Serving testen

```bash
# Prüfen, ob Nginx statische Assets direkt ausliefert
curl -I https://pukalani.studio/images/chatgpt-hero.jpg

# Erwartung:
# cache-control: public, max-age=31536000, immutable ✅
# KEIN "X-Powered-By: Nitro" Header (zeigt, dass Nginx direkt liefert)

# CSS-Dateien
curl -I https://pukalani.studio/_nuxt/entry.CpbaZsXV.css

# Erwartung:
# cache-control: public, max-age=31536000, immutable ✅
# content-encoding: gzip ✅
```

### 4.4 Lighthouse-Score messen

```bash
# Auf lokalem Rechner:
npx lighthouse https://pukalani.studio/chatgpt --view

# Oder online:
# https://pagespeed.web.dev/
# URL eingeben: https://pukalani.studio/chatgpt
```

**Erwartete Metriken:**

| Metrik            | Vorher    | Ziel      | Status |
| ----------------- | --------- | --------- | ------ |
| Performance Score | 95        | 98+       | ⏳     |
| TTFB              | 697 ms    | <200 ms   | ⏳     |
| LCP               | ~2,000 ms | <1,200 ms | ⏳     |
| CSS Load          | 1,586 ms  | <100 ms   | ⏳     |
| Critical Path     | 1,586 ms  | <800 ms   | ⏳     |

### 4.5 Load-Test (Optional)

```bash
# Apache Bench (ab)
ab -n 1000 -c 10 https://pukalani.studio/chatgpt

# Erwartung mit Cluster-Modus:
# - Höhere Requests/Sekunde
# - Niedrigere Latenz unter Last
```

---

## 🔍 Monitoring & Debugging

### Nginx-Logs überwachen

```bash
# Error Log
sudo tail -f /var/log/nginx/error.log

# Access Log
sudo tail -f /var/log/nginx/access.log
```

### PM2-Logs überwachen

```bash
# Real-time Logs
pm2 logs pukalanistudio --lines 100

# Error Logs
pm2 logs pukalanistudio --err

# Monitoring Dashboard
pm2 monit
```

### Häufige Probleme

#### Problem: 502 Bad Gateway

```bash
# Prüfen, ob PM2 läuft
pm2 status

# Prüfen, ob Port 3000 erreichbar ist
curl http://127.0.0.1:3000/

# Nginx Error Log prüfen
sudo tail -f /var/log/nginx/error.log
```

**Lösung:**

```bash
# PM2 neu starten
pm2 restart pukalanistudio

# Oder vollständiger Neustart
pm2 delete pukalanistudio
pm2 start ecosystem.config.cjs
pm2 save
```

#### Problem: Statische Assets nicht gefunden (404)

```bash
# Pfad in Nginx-Config prüfen
sudo nano /etc/nginx/sites-available/pukalani.studio

# Root-Pfad verifizieren
ls -la /var/www/pukalani/.output/public/

# Erwartung:
# - images/
# - _nuxt/
# - favicon.ico
```

#### Problem: Keine Gzip-Kompression

```bash
# Prüfen, ob Gzip aktiviert ist
sudo nginx -T | grep gzip

# Falls nicht aktiv:
sudo nano /etc/nginx/nginx.conf
# gzip on; hinzufügen
sudo systemctl reload nginx
```

---

## 🔄 Rollback-Plan

### Bei kritischen Fehlern

```bash
# 1. Nginx-Config zurücksetzen
sudo cp /etc/nginx/sites-available/pukalani.studio.backup.* \
       /etc/nginx/sites-available/pukalani.studio
sudo nginx -t
sudo systemctl reload nginx

# 2. PM2 zurück auf Single-Instance
pm2 delete pukalanistudio

# ecosystem.config.cjs.backup erstellen (falls nötig):
cat > ecosystem.config.cjs << 'EOF'
module.exports = {
  apps: [{
    name: "pukalanistudio",
    script: ".output/server/index.mjs",
    env: {
      NODE_ENV: "production",
      NITRO_HOST: "127.0.0.1",
      NITRO_PORT: "3000",
      PORT: "3000",
    },
  }],
};
EOF

pm2 start ecosystem.config.cjs
pm2 save

# 3. Code zurücksetzen (falls nötig)
git reset --hard HEAD~1
./deploy.sh
```

---

## 📊 Performance-Verbesserungen dokumentieren

Nach erfolgreichem Deployment:

```bash
# Screenshot von Lighthouse-Report erstellen
# Performance-Metriken notieren

# In PERFORMANCE_IMPROVEMENTS.md eintragen:
cat >> PERFORMANCE_IMPROVEMENTS.md << 'EOF'

---

## Update: $(date +%Y-%m-%d)

### Nginx + PM2 Cluster Optimierung

**Implementiert:**
- ✅ Nginx liefert statische Assets direkt aus
- ✅ Gzip/Brotli Kompression aktiviert
- ✅ PM2 Cluster-Modus (max instances)
- ✅ CSS Inline-Loading optimiert
- ✅ Route Rules mit Prerendering

**Ergebnisse:**
- TTFB: XXX ms → XXX ms (-XXX ms)
- LCP: XXX ms → XXX ms
- Performance Score: XX → XX

EOF
```

---

## 🎯 Checkliste

-   [ ] **Phase 1:** Code committed und gepusht
-   [ ] **Phase 2:** Nginx-Config installiert und getestet
-   [ ] **Phase 3:** Application deployed mit PM2 Cluster
-   [ ] **Phase 4:** Performance-Tests durchgeführt
-   [ ] **Monitoring:** Logs überprüft, keine Fehler
-   [ ] **Dokumentation:** Ergebnisse in PERFORMANCE_IMPROVEMENTS.md

---

## 📞 Support

Bei Problemen:

1. Prüfen Sie die Logs (Nginx + PM2)
2. Führen Sie Health-Checks durch
3. Nutzen Sie den Rollback-Plan
4. Kontaktieren Sie den Support (falls nötig)

**Wichtige Dateien:**

-   `/etc/nginx/sites-available/pukalani.studio` (Nginx-Config)
-   `/var/www/pukalani/ecosystem.config.cjs` (PM2-Config)
-   `/var/www/pukalani/nuxt.config.ts` (Nuxt-Config)
-   `/var/log/nginx/error.log` (Nginx-Logs)
-   `~/logs/pm2-*.log` (PM2-Logs)

---

**Stand:** $(date +%Y-%m-%d)  
**Ziel:** Server Response Time < 200 ms  
**Erwartete Einsparung:** ~600 ms
