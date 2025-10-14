# Nginx Ploi Config Upgrade - Performance Optimierung

## 📊 Vergleich: Vorher vs. Nachher

### ❌ Aktuelle Config (Vorher)

**Problem 1: Alle Requests durch Node.js**

```nginx
location / {
    proxy_pass http://localhost:3000;  # ← ALLES geht durch PM2
}
```

→ **Folge:** Bilder, CSS, JS werden nicht gecacht = 697 ms Response Time

**Problem 2: Keine Cache-Header**

-   Keine `Cache-Control` für statische Assets
-   Browser muss jedes Mal neu laden

**Problem 3: Unvollständige Gzip-Config**

-   Fehlende Font-Types
-   Keine Brotli-Unterstützung

### ✅ Optimierte Config (Nachher)

**Lösung 1: Statische Assets direkt von Nginx**

```nginx
location /_nuxt/ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri =404;  # ← Nginx liefert direkt!
}

location / {
    try_files $uri $uri/index.html @nodejs;  # ← Nur wenn nicht statisch
}
```

→ **Ergebnis:** ~400-500 ms schneller

**Lösung 2: Optimale Cache-Header**

-   Versionierte Assets: 1 Jahr immutable
-   HTML: must-revalidate
-   Wiederholte Besuche instant

**Lösung 3: Bessere Kompression**

-   Vollständige Gzip-Types
-   Brotli-Support (optional)
-   ~60-80% kleinere Dateien

---

## 🔧 Hauptunterschiede im Detail

| Feature               | Aktuell          | Optimiert               | Verbesserung             |
| --------------------- | ---------------- | ----------------------- | ------------------------ |
| **Statische Assets**  | Durch Node.js    | Direkt von Nginx        | **-400-500 ms**          |
| **Cache-Control**     | ❌ Fehlt         | ✅ Immutable für Assets | Instant Wiederladen      |
| **Gzip-Typen**        | 9 Types          | 16 Types (inkl. Fonts)  | Bessere Kompression      |
| **Brotli**            | ❌ Nicht aktiv   | ✅ Vorbereitet          | ~10-15% kleiner          |
| **SSL Session Cache** | ❌ Fehlt         | ✅ 10 Min Cache         | Schnellerer Handshake    |
| **Proxy Timeouts**    | Standard         | Optimiert (10s/30s)     | Bessere Fehlerbehandlung |
| **Root-Verzeichnis**  | ❌ Nicht gesetzt | ✅ .output/public       | Nginx findet Dateien     |

---

## 📝 Änderungen Schritt für Schritt

### 1. Root-Verzeichnis hinzugefügt

```nginx
# NEU:
root /home/ploi/pukalani.studio/.output/public;
```

### 2. Location Blocks für statische Assets

```nginx
# NEU: Nuxt Build Assets
location /_nuxt/ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri =404;
}

# NEU: Optimierte Bilder
location /_ipx/ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri @nodejs;
}

# NEU: Statische Bilder
location /images/ {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri =404;
}

# NEU: Icons & Favicons
location ~ ^/(favicon\.ico|icon\.svg|...) {
    expires 1y;
    add_header Cache-Control "public, max-age=31536000, immutable";
    try_files $uri =404;
}
```

### 3. HTML-Requests optimiert

```nginx
# NEU: try_files erst prüfen
location / {
    add_header Cache-Control "public, max-age=0, must-revalidate";
    try_files $uri $uri/index.html @nodejs;
}

# NEU: Named Location für Node.js
location @nodejs {
    proxy_pass http://localhost:3000;
    # ... Proxy-Settings
}
```

### 4. Gzip-Typen erweitert

```nginx
# NEU hinzugefügt:
gzip_types
    ... # bestehende
    font/truetype              # NEU
    font/opentype              # NEU
    application/vnd.ms-fontobject  # NEU
    application/manifest+json  # NEU (für PWA)
```

### 5. SSL Session Caching

```nginx
# NEU:
ssl_session_cache shared:SSL:10m;
ssl_session_timeout 10m;
ssl_stapling on;
ssl_stapling_verify on;
```

### 6. Proxy-Optimierungen

```nginx
# NEU:
proxy_connect_timeout 10s;
proxy_send_timeout 30s;
proxy_read_timeout 30s;

proxy_buffering on;
proxy_buffer_size 4k;
proxy_buffers 8 4k;
```

---

## 🚀 Installation auf Ploi-Server

### Schritt 1: Backup erstellen

```bash
# SSH auf Server
ssh ploi@pukalani.studio

# Backup der aktuellen Config
sudo cp /etc/nginx/sites-available/pukalani.studio \
       /etc/nginx/sites-available/pukalani.studio.backup.$(date +%Y%m%d-%H%M)

# Backup verifizieren
ls -la /etc/nginx/sites-available/pukalani.studio.backup*
```

### Schritt 2: Root-Pfad ermitteln

```bash
# Aktuelles Deployment-Verzeichnis finden
cd ~
ls -la
# Sollte zeigen: /home/ploi/pukalani.studio

# Build-Output prüfen
ls -la ~/pukalani.studio/.output/public/

# Erwartung:
# - _nuxt/
# - images/
# - favicon.ico
# - robots.txt
```

### Schritt 3: Neue Config installieren

**Option A: Lokal hochladen**

```bash
# Auf lokalem Rechner:
scp nginx-ploi-optimized.conf ploi@pukalani.studio:/tmp/nginx-optimized.conf

# Auf Server:
ssh ploi@pukalani.studio
sudo mv /tmp/nginx-optimized.conf /etc/nginx/sites-available/pukalani.studio
```

**Option B: Direkt auf Server bearbeiten**

```bash
# Auf Server:
sudo nano /etc/nginx/sites-available/pukalani.studio

# Inhalt aus nginx-ploi-optimized.conf einfügen
# WICHTIG: Pfad in Zeile ~29 anpassen:
# root /home/ploi/pukalani.studio/.output/public;
```

### Schritt 4: Config testen

```bash
# Syntax-Prüfung
sudo nginx -t

# Erwartete Ausgabe:
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful
```

**Bei Fehlern:**

```bash
# Fehlerdetails anzeigen
sudo nginx -t

# Backup wiederherstellen
sudo cp /etc/nginx/sites-available/pukalani.studio.backup.* \
       /etc/nginx/sites-available/pukalani.studio
sudo nginx -t
```

### Schritt 5: Nginx neu laden

```bash
# Sanfter Reload (keine Downtime)
sudo systemctl reload nginx

# Status prüfen
sudo systemctl status nginx

# Sollte zeigen: active (running)
```

### Schritt 6: Testen

```bash
# Test 1: Statische Datei direkt von Nginx
curl -I https://pukalani.studio/images/chatgpt-hero.jpg

# Erwartung:
# HTTP/2 200
# cache-control: public, max-age=31536000, immutable ✅
# KEIN "x-powered-by: Nitro" Header (zeigt: Nginx liefert!)

# Test 2: Gzip-Kompression
curl -H "Accept-Encoding: gzip" -I https://pukalani.studio/chatgpt

# Erwartung:
# content-encoding: gzip ✅

# Test 3: CSS/JS Assets
curl -I https://pukalani.studio/_nuxt/entry.CpbaZsXV.css

# Erwartung:
# cache-control: public, max-age=31536000, immutable ✅
# content-encoding: gzip ✅

# Test 4: TTFB (Time To First Byte)
curl -w "@curl-format.txt" -o /dev/null -s https://pukalani.studio/chatgpt

# Erwartung:
# time_starttransfer: < 0.200s (200ms) ✅
```

---

## 📊 Performance-Validierung

### Vorher/Nachher-Vergleich

```bash
# 1. Lighthouse-Test durchführen
npx lighthouse https://pukalani.studio/chatgpt --view

# 2. Metriken notieren:
```

| Metrik            | Vorher    | Ziel      | Tatsächlich |
| ----------------- | --------- | --------- | ----------- |
| TTFB              | 697 ms    | <200 ms   | ⏳          |
| LCP               | ~2,000 ms | <1,200 ms | ⏳          |
| Performance Score | 95        | 98+       | ⏳          |

### Chrome DevTools Network-Test

1. Chrome DevTools öffnen (F12)
2. Network-Tab
3. "Disable cache" DEAKTIVIEREN
4. Seite neu laden (Ctrl+R)
5. Prüfen:
    - `/_nuxt/entry.css` → Status: 200 (from disk cache) ✅
    - `/images/chatgpt-hero.jpg` → Status: 200 (from disk cache) ✅
    - Alle Assets haben `cache-control: immutable` ✅

---

## 🔍 Troubleshooting

### Problem: Statische Assets nicht gefunden (404)

**Ursache:** Root-Pfad falsch

```bash
# Prüfen
sudo nginx -T | grep "root"

# Sollte zeigen:
# root /home/ploi/pukalani.studio/.output/public;

# Korrigieren
sudo nano /etc/nginx/sites-available/pukalani.studio
# Zeile ~29 anpassen
```

### Problem: Immer noch "X-Powered-By: Nitro" Header

**Ursache:** try_files findet Datei nicht, geht zu @nodejs

```bash
# Prüfen ob Dateien existieren
ls -la /home/ploi/pukalani.studio/.output/public/_nuxt/
ls -la /home/ploi/pukalani.studio/.output/public/images/

# Falls Ordner leer → Build neu ausführen
cd ~/pukalani.studio
npm run build
```

### Problem: Gzip funktioniert nicht

**Ursache:** Gzip-Module fehlt

```bash
# Prüfen
nginx -V 2>&1 | grep -o with-http_gzip

# Sollte zeigen: with-http_gzip

# Falls nicht: Nginx neu installieren mit Gzip
sudo apt install nginx-full
```

### Problem: 502 Bad Gateway nach Config-Update

**Ursache:** PM2 läuft nicht

```bash
# PM2 Status prüfen
pm2 status

# Falls nicht läuft:
cd ~/pukalani.studio
pm2 start ecosystem.config.cjs
pm2 save
```

---

## 🎯 Checkliste

-   [ ] Backup der alten Config erstellt
-   [ ] Root-Pfad in neuer Config angepasst
-   [ ] `nginx -t` erfolgreich
-   [ ] Nginx neu geladen
-   [ ] Test 1: Statische Assets haben `cache-control: immutable`
-   [ ] Test 2: Kein "X-Powered-By: Nitro" für statische Assets
-   [ ] Test 3: Gzip-Kompression aktiv
-   [ ] Test 4: TTFB < 200 ms
-   [ ] Lighthouse-Score > 98

---

## 📚 Optionale Brotli-Installation

Für noch bessere Kompression (10-15% kleiner als Gzip):

```bash
# Brotli-Module installieren
sudo apt install nginx-module-brotli

# In /etc/nginx/nginx.conf GANZ OBEN einfügen:
sudo nano /etc/nginx/nginx.conf

# Zeilen hinzufügen:
load_module modules/ngx_http_brotli_filter_module.so;
load_module modules/ngx_http_brotli_static_module.so;

# In pukalani.studio Config die auskommentieren Zeilen aktivieren
sudo nano /etc/nginx/sites-available/pukalani.studio

# Suchen nach:
# brotli on;
# → Kommentare entfernen

# Nginx neu laden
sudo nginx -t
sudo systemctl reload nginx

# Testen
curl -H "Accept-Encoding: br" -I https://pukalani.studio/chatgpt
# Erwartung: content-encoding: br
```

---

## 🔄 Rollback bei Problemen

```bash
# Schritt 1: Alte Config wiederherstellen
sudo cp /etc/nginx/sites-available/pukalani.studio.backup.* \
       /etc/nginx/sites-available/pukalani.studio

# Schritt 2: Testen & Reload
sudo nginx -t
sudo systemctl reload nginx

# Schritt 3: Verifizieren
curl -I https://pukalani.studio/
```

---

**Erwartetes Ergebnis:**

-   ✅ TTFB: 697 ms → **<200 ms** (-500 ms)
-   ✅ LCP: ~2,000 ms → **<1,200 ms** (-800 ms)
-   ✅ Performance Score: 95 → **98+** (+3 Punkte)

**Deployment-Zeit:** ~10-15 Minuten  
**Downtime:** 0 Sekunden (Reload statt Restart)
