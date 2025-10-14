# Forced Reflow Performance-Optimierungen

## Problem

Forced Reflows mit 75ms Gesamtzeit wurden durch ineffizientes JavaScript verursacht, das DOM-Änderungen und Geometrie-Abfragen gemischt hat.

## Implementierte Lösungen

### 1. **Neues Composable: `usePerformantAnimations.ts`**

-   **Read/Write Batching**: Alle DOM-Lesevorgänge werden vor den Schreibvorgängen durchgeführt
-   **RequestAnimationFrame**: DOM-Änderungen werden in einem einzelnen Frame gebündelt
-   **RequestIdleCallback**: Nicht-kritische Arbeiten werden auf Idle-Zeit verschoben
-   **Observer Cleanup**: Elemente werden nach der Animation nicht mehr beobachtet

```typescript
// Verwendung im Code:
const { observeElements } = usePerformantAnimations();
onMounted(() => {
    observeElements("section");
});
```

### 2. **CSS-Optimierungen (`main.css`)**

-   **CSS Containment**: `contain: layout style paint` isoliert Layout-Berechnungen
-   **Content Visibility**: `content-visibility: auto` für Bilder reduziert unnötige Rendering
-   **GPU-Beschleunigung**: `transform: translateZ(0)` aktiviert Hardware-Beschleunigung
-   **Contain Intrinsic Size**: Reserviert Platz für Bilder, verhindert Layout Shifts

### 3. **Vite-Konfiguration (`nuxt.config.ts`)**

-   **CSS DevSourcemap deaktiviert**: Reduziert Overhead während der Entwicklung
-   **OptimizeDeps**: Vordefinierte Dependencies für schnelleres Cold-Start
-   **View Transitions deaktiviert**: Verhindert zusätzliche Reflow-Trigger
-   **Payload Extraction**: Verbessert SSR-Performance

### 4. **Intersection Observer Optimierungen**

**Vorher** (verursachte Forced Reflows):

```javascript
observer.observe((entries) => {
    entries.forEach((entry) => {
        // ❌ Direktes classList.add triggert Reflow
        entry.target.classList.add("animate-in");
    });
});
```

**Nachher** (optimiert):

```javascript
observer.observe((entries) => {
    // ✅ Batching mit requestAnimationFrame
    requestAnimationFrame(() => {
        // Read-Phase: Filter alle sichtbaren Elemente
        const updates = entries
            .filter((e) => e.isIntersecting)
            .map((e) => e.target);

        // Write-Phase: Alle Änderungen zusammen
        updates.forEach((target) => {
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
        });
    });
});
```

## Performance-Metriken

### Erwartete Verbesserungen:

-   **Forced Reflow Zeit**: 75ms → <10ms (~87% Reduzierung)
-   **Total Blocking Time (TBT)**: Deutlich reduziert
-   **Cumulative Layout Shift (CLS)**: Verbessert durch contain-intrinsic-size
-   **First Input Delay (FID)**: Reduziert durch requestIdleCallback

## Best Practices für zukünftige Entwicklung

### ❌ Vermeiden:

```javascript
// Layout thrashing
element.style.width = "100px"; // Write
const width = element.offsetWidth; // Read ← Forced Reflow!
element.style.height = "100px"; // Write
```

### ✅ Richtig:

```javascript
// Batch reads and writes
requestAnimationFrame(() => {
    // Read-Phase
    const width = element.offsetWidth;
    const height = element.offsetHeight;

    // Write-Phase
    element.style.width = width + "px";
    element.style.height = height + "px";
});
```

### Layout-triggernde Properties vermeiden:

-   `offsetWidth`, `offsetHeight`, `offsetTop`, `offsetLeft`
-   `clientWidth`, `clientHeight`
-   `scrollTop`, `scrollLeft`, `scrollWidth`, `scrollHeight`
-   `getBoundingClientRect()`
-   `getComputedStyle()`

### Performance-freundliche Alternativen:

-   CSS Transforms statt Top/Left
-   `will-change` für Animationen
-   `content-visibility` für off-screen Content
-   `contain` für isolierte Komponenten

## Testing

### Chrome DevTools Performance-Tab:

1. Performance-Aufzeichnung starten
2. Seite scrollen
3. Nach "Forced reflow" in der Timeline suchen
4. Sollte jetzt minimal sein (<10ms total)

### Lighthouse-Audit:

```bash
npm run build
npm run preview
# Chrome DevTools → Lighthouse → Performance
```

## Weiterführende Ressourcen

-   [Web.dev: Avoid large, complex layouts](https://web.dev/avoid-large-complex-layouts-and-layout-thrashing/)
-   [MDN: CSS Containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment)
-   [Content Visibility Guide](https://web.dev/content-visibility/)
