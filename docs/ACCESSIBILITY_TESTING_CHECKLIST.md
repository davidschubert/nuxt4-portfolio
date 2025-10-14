# Accessibility Testing Checklist

Dieser Leitfaden hilft Ihnen, die Barrierefreiheit des Portfolios systematisch zu testen und WCAG 2.1 AA Konformität sicherzustellen.

## ⌨️ 1. Keyboard-Navigation Tests

### Tab-Order Überprüfung

**Ziel:** Sicherstellen, dass alle interaktiven Elemente in logischer Reihenfolge mit der Tab-Taste erreichbar sind.

**Test-Schritte:**

1. ✅ Öffne die Seite im Browser
2. ✅ Schließe alle Maus-Inputs (nur Keyboard)
3. ✅ Drücke Tab wiederholt
4. ✅ Prüfe, dass:
    - Skip-Link als erstes erscheint
    - Navigation-Links folgen
    - Hauptinhalt-Elemente in visueller Reihenfolge kommen
    - Footer-Links als letztes erscheinen
    - Keine versteckten Elemente fokussiert werden

**Erwartetes Ergebnis:**

-   Focus-Indikatoren sind deutlich sichtbar (grüner Ring)
-   Tab-Order entspricht visueller Anordnung
-   Keine "Focus-Falle" (immer mit Tab/Shift+Tab navigation möglich)

---

### Interaktive Elemente

**Ziel:** Alle Buttons, Links und Formular-Elemente sind keyboard-zugänglich.

**Test-Schritte:**

1. ✅ Navigiere zu Button mit Tab
2. ✅ Drücke Enter oder Space
3. ✅ Prüfe, dass Aktion ausgeführt wird
4. ✅ Teste folgende Elemente:
    - CTA Buttons (Calendly, Kontakt)
    - Formular Submit-Button
    - Alle NuxtLinks
    - Formular-Inputs (Text, Select, Textarea)

**Erwartetes Ergebnis:**

-   Enter aktiviert Links und Buttons
-   Space aktiviert Buttons (nicht Links)
-   Focus bleibt nach Aktion sichtbar

---

### Skip-Link Funktionalität

**Ziel:** "Zum Hauptinhalt springen" Link funktioniert korrekt.

**Test-Schritte:**

1. ✅ Lade die Seite neu
2. ✅ Drücke Tab (Skip-Link sollte erscheinen)
3. ✅ Drücke Enter
4. ✅ Prüfe, dass Focus zum `<main id="main-content">` springt

**Erwartetes Ergebnis:**

-   Skip-Link ist visuell sichtbar bei Focus
-   Klick/Enter springt zum Hauptinhalt
-   Navigation kann übersprungen werden

---

## 🔊 2. Screen Reader Tests

### VoiceOver (macOS)

**Aktivierung:** `Cmd + F5`

**Test-Schritte:**

1. ✅ Öffne Safari (beste VoiceOver-Kompatibilität)
2. ✅ Aktiviere VoiceOver
3. ✅ Navigiere mit `VO + →` (Ctrl+Option+Right)
4. ✅ Prüfe, dass Folgendes korrekt angesagt wird:

**Landmarks & Struktur:**

-   ✅ "Banner" für `<header role="banner">`
-   ✅ "Hauptbereich" für `<main role="main">`
-   ✅ "Navigation" für `<nav>`
-   ✅ "Fußzeile" für `<footer role="contentinfo">`
-   ✅ Überschriften mit Level (H1, H2, etc.)

**Formulare:**

-   ✅ Label-Text wird für jedes Input-Feld gelesen
-   ✅ "erforderlich" wird für Required-Felder angesagt
-   ✅ Fieldset Legenden werden als Gruppen-Kontext gelesen
-   ✅ Fehler- und Erfolgs-Meldungen werden automatisch vorgelesen (aria-live)

**Buttons & Links:**

-   ✅ Button-Text + "Taste" (Button)
-   ✅ Link-Text + "Link"
-   ✅ Aria-labels überschreiben sichtbaren Text wenn vorhanden

---

### NVDA (Windows)

**Installation:** [nvaccess.org](https://www.nvaccess.org/)

**Test-Schritte:**

1. ✅ Öffne Firefox oder Chrome
2. ✅ Starte NVDA (`Ctrl + Alt + N`)
3. ✅ Navigiere mit Pfeiltasten oder `Tab`
4. ✅ Teste gleiche Punkte wie bei VoiceOver

**NVDA Shortcuts:**

-   `Insert + F7`: Liste aller Landmarks
-   `H`: Nächste Überschrift
-   `K`: Nächster Link
-   `F`: Nächstes Formular-Feld
-   `B`: Nächster Button

---

## 🎯 3. Focus Management Tests

### Alert-Nachrichten

**Ziel:** Neue Inhalte (Success/Error) erhalten automatisch Focus.

**Test-Schritte:**

1. ✅ Fülle Kontaktformular aus
2. ✅ Klicke Submit
3. ✅ Prüfe, dass:
    - Success/Error Message erscheint
    - **Focus automatisch zur Message springt**
    - Screen Reader liest Message vor (aria-live)
    - Message ist keyboard-fokussierbar (tabindex="-1")

**Erwartetes Ergebnis:**

-   Focus springt nach 200ms zur Alert
-   Screen Reader kündigt Message an
-   User kann sofort mit Keyboard weiter navigieren

---

### Modal/Overlay Focus-Trap

**Ziel:** Falls Modals existieren (z.B. Calendly), Focus bleibt im Modal.

**Test-Schritte:**

1. ✅ Öffne Calendly Modal per CTA-Button
2. ✅ Navigiere mit Tab durch Modal-Inhalte
3. ✅ Prüfe, dass:
    - Focus bleibt innerhalb des Modals
    - Letztes Element führt zurück zum ersten
    - ESC schließt Modal
    - Focus kehrt zu öffnendem Button zurück

**Erwartetes Ergebnis:**

-   Kein Escape aus Modal mit Tab
-   Focus-Return nach Schließen

---

## 🎨 4. State Indicators Tests

### Button States

**Ziel:** Disabled, Busy, Hover States sind visuell unterscheidbar.

**Test mit CSS:**

```css
button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

[aria-busy="true"] {
    opacity: 0.7;
    cursor: wait;
}

button:hover {
    /* Hover-Effekt */
}
```

**Test-Schritte:**

1. ✅ Klicke Submit-Button im Formular
2. ✅ Prüfe während des Sendens:
    - Button Text: "Wird gesendet..."
    - `aria-busy="true"` ist gesetzt
    - Button ist visuell gedimmt
    - Cursor zeigt "wait"
3. ✅ Prüfe nach Erfolg/Fehler:
    - Button kehrt zu normalem State zurück
    - `aria-busy="false"`

---

### Focus Indicators

**Ziel:** Focus ist immer deutlich sichtbar.

**Test-Schritte:**

1. ✅ Navigiere mit Tab durch alle Seiten
2. ✅ Prüfe, dass jedes Element zeigt:
    - Grüner Outline Ring (3px)
    - Offset von 3px
    - Box-Shadow für zusätzliche Sichtbarkeit
3. ✅ Teste auf verschiedenen Backgrounds:
    - Hell (weiß/grau)
    - Dunkel (schwarz/navy)

**Erwartetes Ergebnis:**

-   Focus ist auf allen Backgrounds sichtbar
-   Kontrast-Ratio ≥ 3:1 (WCAG AA)

---

## 📐 5. DOM Order = Visual Order

### Layout Matching

**Ziel:** DOM-Reihenfolge entspricht visueller Reihenfolge.

**Test-Schritte:**

1. ✅ Öffne DevTools → Elements
2. ✅ Vergleiche HTML-Struktur mit visuellem Layout
3. ✅ Navigiere mit Tab
4. ✅ Prüfe, dass Focus-Sprünge natürlich sind (kein Zurückspringen)

**Kritische Bereiche:**

-   Header Navigation
-   Hero Section
-   Portfolio Grid
-   Footer Columns

**Erwartetes Ergebnis:**

-   Keine CSS-Tricks (flexbox order, absolute positioning) die Reihenfolge ändern
-   Tab-Navigation folgt Lese-Richtung (links → rechts, oben → unten)

---

## 🏷️ 6. Custom Controls Verification

### ARIA Roles & Labels

**Ziel:** Alle custom interactive Elemente haben korrekte ARIA-Attribute.

**Test-Liste:**

```html
<!-- Calendly Button -->
<button
    type="button"
    role="button"
    aria-label="Kalendar öffnen und 30-Minuten Erstgespräch buchen"
>
    <!-- Alert Messages -->
    <div role="alert" aria-live="polite" aria-atomic="true">
        <!-- Form Submit -->
        <button :aria-busy="isSubmitting" :aria-label="...">
            <!-- Fieldsets -->
            <fieldset>
                <legend>Persönliche Daten</legend>
                ...
            </fieldset>
        </button>
    </div>
</button>
```

**Validation Tools:**

-   Chrome: Accessibility DevTools
-   Firefox: Accessibility Inspector
-   axe DevTools Extension

---

## ♿️ 7. Offscreen Content

### Hidden Content Handling

**Ziel:** Visuell versteckte Inhalte sind auch für Screen Reader versteckt.

**Test-Schritte:**

1. ✅ Suche nach `v-if` / `v-show` Direktiven
2. ✅ Prüfe, dass versteckte Elemente haben:
    - `aria-hidden="true"` (bei v-show)
    - Keine aria-hidden nötig bei v-if (DOM removal)
3. ✅ Teste mit Screen Reader:
    - Versteckte Inhalte werden nicht vorgelesen
    - Keine fokussierbaren Elemente im versteckten Bereich

**Beispiel:**

```vue
<div
    v-show="isVisible"
    :aria-hidden="!isVisible"
>
```

---

## 🛠️ 8. Automated Testing Tools

### Browser Extensions

**Installieren:**

1. ✅ [axe DevTools](https://www.deque.com/axe/devtools/) (Chrome/Firefox)
2. ✅ [WAVE](https://wave.webaim.org/extension/) (Chrome/Firefox)
3. ✅ Lighthouse (Built-in Chrome DevTools)

**Axe DevTools Test:**

1. Installiere Extension
2. Öffne DevTools → axe DevTools Tab
3. Klicke "Scan ALL of my page"
4. Review Issues:
    - **Critical** (0 Target)
    - **Serious** (0 Target)
    - **Moderate** (fix if possible)
    - **Minor** (nice-to-have)

**WAVE Test:**

1. Klicke WAVE-Icon in Browser
2. Review Categories:
    - ❌ Errors (0 Target)
    - ⚠️ Alerts (check each)
    - ✅ Features (more is better)
    - 🏗️ Structural Elements
    - 🔴 Contrast Errors (0 Target)

**Lighthouse Test:**

1. Öffne DevTools → Lighthouse Tab
2. Select: Desktop, Accessibility
3. Generate Report
4. **Target Score: 95-100**

---

## 📱 9. Responsive Accessibility

### Mobile Keyboard (iOS/Android)

**Test-Schritte:**

1. ✅ Öffne auf Mobile Device
2. ✅ Teste Formular-Eingaben:
    - Korrekte Keyboard-Type (email, tel, text)
    - Autofocus nicht auf erstes Feld (anti-pattern)
    - Zoom nicht deaktiviert
3. ✅ Teste Touch-Targets:
    - Min. 44x44px (iOS) / 48x48px (Android)
    - Genug Abstand zwischen Buttons

---

## 📊 10. Testing Checklist Summary

### Pre-Release Checklist

-   [ ] **Tab-Order:** Logisch, keine Fallen, sichtbare Focus-Indikatoren
-   [ ] **Skip-Link:** Funktioniert, visuell sichtbar bei Focus
-   [ ] **Screen Reader:** VoiceOver/NVDA lesen alle Inhalte korrekt
-   [ ] **Landmarks:** Alle Seiten haben header, main, nav, footer
-   [ ] **Forms:** Labels, Required-Markers, Fieldsets, Error-Handling
-   [ ] **ARIA:** Korrekte Roles, States, Properties
-   [ ] **State Indicators:** Disabled, Busy, Hover visuell unterscheidbar
-   [ ] **DOM Order:** Entspricht visueller Reihenfolge
-   [ ] **Focus Management:** Neue Inhalte erhalten Focus
-   [ ] **Hidden Content:** `aria-hidden` für v-show Elemente
-   [ ] **Automated Tests:** axe DevTools 0 Errors, Lighthouse 95+

---

## 🎯 Expected Results

### WCAG 2.1 AA Konformität

**Perceivable:**

-   ✅ Text-Alternativen für Bilder (alt-Attribute)
-   ✅ Farb-Kontrast ≥ 4.5:1 für Text
-   ✅ Farb-Kontrast ≥ 3:1 für UI-Komponenten

**Operable:**

-   ✅ Alle Funktionen sind keyboard-zugänglich
-   ✅ Keine Keyboard-Fallen
-   ✅ Skip-Link vorhanden

**Understandable:**

-   ✅ Logische Tab-Reihenfolge
-   ✅ Konsistente Navigation
-   ✅ Hilfreiche Fehlermeldungen

**Robust:**

-   ✅ Korrekte Semantik (HTML5)
-   ✅ ARIA wo nötig
-   ✅ Name, Role, Value für alle Controls

---

## 🐛 Bug Reporting Template

Falls Accessibility-Issues gefunden werden:

```markdown
**Issue:** [Kurzbeschreibung]

**WCAG Criterion:** [z.B. 2.1.1 Keyboard]

**Severity:** Critical / High / Medium / Low

**Steps to Reproduce:**

1. ...
2. ...

**Expected Behavior:**
...

**Actual Behavior:**
...

**Screenshot/Screen Recording:**
[attach]

**Browser/Assistive Technology:**

-   Browser: Chrome 120
-   Screen Reader: NVDA 2023.3
-   OS: Windows 11

**Suggested Fix:**
...
```

---

## 📚 Weitere Ressourcen

-   [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
-   [MDN ARIA Best Practices](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)
-   [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
-   [Inclusive Components](https://inclusive-components.design/)
-   [A11y Project Checklist](https://www.a11yproject.com/checklist/)

---

**Erstellt:** 2025-01-14  
**Letzte Aktualisierung:** 2025-01-14  
**Version:** 1.0.0
