# Ploi Webserver Configuration, do not remove!

include /etc/nginx/ploi/pukalani.studio/before/\*;

server {
listen 80;
listen [::]:80;

    server_name pukalani.studio;
    include /etc/nginx/ssl/pukalani.studio;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ecdh_curve X25519:prime256v1:secp384r1;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
    ssl_prefer_server_ciphers off;
    ssl_dhparam /etc/nginx/dhparams.pem;

    # Schutz-Header ohne Duplikate
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Permissions-Policy "geolocation=(), camera=(), microphone=(), usb=(), midi=(), accelerometer=(), gyroscope=(), magnetometer=(), payment=(), browsing-topics=()" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header Cross-Origin-Opener-Policy "same-origin" always;

    charset utf-8;

    # Ploi Configuration, do not remove!
    include /etc/nginx/ploi/pukalani.studio/server/*;

    access_log off;
    error_log  /var/log/nginx/pukalani.studio-error.log error;

    # ❌ DIESE ZEILEN ENTFERNT - Nuxt liefert sie selbst aus
    # location = /favicon.ico { access_log off; log_not_found off; }
    # location = /robots.txt  { access_log off; log_not_found off; }

    location ~ /\.(?!well-known).* {
        deny all;
    }

    location ~ /.well-known/acme-challenge {
        allow all;
        root /var/www/html;
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # --- Kompression / ETags ---
    gzip on;
    gzip_static on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_comp_level 6;
    gzip_types
        text/plain
        text/css
        application/json
        application/javascript
        application/manifest+json
        application/xml
        text/xml
        application/xml+rss
        text/javascript
        image/svg+xml;

}

# Ploi Webserver Configuration, do not remove!

include /etc/nginx/ploi/pukalani.studio/after/\*;
