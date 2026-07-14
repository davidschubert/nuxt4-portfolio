# GEO/SEO-Playbook – Pukalani Studio

Stand: Juli 2026. Basiert auf drei Recherche-Läufen: (1) Top-Designer-Portfolios weltweit, (2) rankende DACH-Freelancer-Websites, (3) Studien zu KI-Zitationen (Ahrefs, Semrush, Princeton-GEO-Paper, Seer Interactive, NeuRank-DACH-Studie).

## Was bereits umgesetzt ist (On-Page)

- Hub-and-Spoke: `/fable` (Hub) + `/ux-audit` + `/nuxt-entwickler-freelancer` + `/wissen/was-kostet-ux-design` + `/wissen/freelancer-oder-agentur` + `/en`
- Antwort-Absätze (40–60 Wörter) unter jeder H2, Preise in ganzen Sätzen, HTML-Tabellen
- Statistiken mit benannten Quellen + Quellenverzeichnis (stärkster gemessener Zitations-Hebel: +41 % Sichtbarkeit laut Princeton-GEO-Paper)
- Sichtbares „Zuletzt aktualisiert"-Datum überall (Frische: ~50 % aller KI-Zitate gehen an Inhalte < 13 Wochen)
- Schema.org-Graphen (für Google Rich Results; LLMs lesen laut Ahrefs/searchVIU primär sichtbares HTML)
- AI-Crawler explizit erlaubt (robots.txt), llms.txt vorhanden (geringe Wirkung laut Ahrefs-Studie, aber harmlos)
- Englische Seite `/en` (ChatGPT zieht ~68 % englischsprachige Quellen auch bei deutschen Prompts)

## Off-Page-Aktionsplan (nur du kannst das tun — nach Wirkung sortiert)

1. **Google Business Profile anlegen/pflegen.** Die NeuRank-DACH-Studie zeigt: 38 % der Quellen, mit denen ChatGPT deutsche Anbieter empfiehlt, sind Google-Maps-/Business-Profile-Daten. Kategorie „Webdesigner/UX-Designer", Leistungen, Fotos, Beiträge.
2. **Bewertungen sammeln.** Perplexity liest bei Anbieter-Empfehlungen in ~100 % der Fälle Bewertungen, ChatGPT in ~58 %. Praxis-Schwelle: 30+ Bewertungen bei ≥ 4,3 Sternen. Jeden Kunden nach Projektende aktiv um eine Google-Bewertung bitten; zusätzlich ProvenExpert oder Trustpilot.
3. **Plattform-Profile konsistent halten** (Name, Leistungen, Ort identisch): LinkedIn, Xing, Malt, freelancermap, Uplink, Behance, GitHub. Prüfen, dass linkedin.com/in/davidschubert, behance.net/davidschubert, github.com/davidschubert wirklich existieren — sie stehen im Schema-Markup der Website.
4. **In Drittanbieter-Listen kommen.** Ahrefs (26.000 ChatGPT-Quellen): „Beste X"-Listicles dominieren Empfehlungs-Antworten; Position in fremden Listen korreliert mit Nennung durch ChatGPT. Ziel: Freelancer-Verzeichnisse, „beste UX-Freelancer"-Roundups, t3n/OMR-Beiträge.
5. **Bing Webmaster Tools einrichten** (Copilot läuft auf dem Bing-Index) und Google Search Console, falls noch nicht geschehen. Sitemap einreichen.
6. **Community-Präsenz unter Klarnamen**: Reddit (r/userexperience u. ä.) ist Perplexitys Top-Quelle (~47 % der Zitate). Fragen beantworten, nicht werben.
7. **Marken-Erwähnungen schlagen Backlinks** (Ahrefs: Korrelation 0,664 vs. 0,218). Gastbeiträge, Podcast-Auftritte, eigene Mini-Studien („Ich habe 30 SaaS-Onboardings auditiert — 5 Muster") veröffentlichen.
8. **Falls Cloudflare o. ä. vor die Site kommt:** Bot-Blocking prüfen — Cloudflare blockt AI-Crawler seit Juli 2025 standardmäßig.

## Freshness-Routine (quartalsweise, ~1 h)

1. Preise/FAQ prüfen, `LAST_UPDATED`-Konstanten + sichtbare Daten auf allen Seiten aktualisieren.
2. Kosten-Guide: neue Ausgabe des Freelancer-Kompass / German-UPA-Reports einpflegen, Malt-Werte neu abrufen („abgerufen am" anpassen), Jahreszahl in Titeln pflegen.
3. Test-Prompts in ChatGPT/Perplexity/Gemini stellen („UX Designer Freelancer empfehlen", „Was kostet ein UX Audit?", „Nuxt Entwickler Freelancer") und notieren, welche Quellen zitiert werden → genau dort Präsenz aufbauen.

## Offene Punkte auf der Website

- **Echte Case Studies:** Die vier Referenzen sind anonymisierte Platzhalter. Sobald Freigaben von Zentis, Owngame Academy oder häppy vorliegen: ersetzen und je Case eine eigene URL (`/referenzen/[kunde]`) anlegen — rankende DACH-Freelancer machen genau das.
- **Datenschutzerklärung** (DSGVO-Pflicht) und ggf. HTML-Impressum statt PDF.
- **Kontaktformular-Backend** (aktuell bewusst weggelassen; cal.com + E-Mail sind die Conversion-Pfade).
- **Profilfoto** für die Über-mich-Sektion und Person-Schema (E-E-A-T).
- Wenn `/fable` als Gewinner feststeht: auf `/` umziehen, Canonicals/interne Links anpassen, alte Varianten per 301 weiterleiten oder auf noindex setzen (aktuell konkurrieren vier ähnliche Seiten um dieselben Keywords).
