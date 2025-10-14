/**
 * Composable für Focus Management bei dynamischem Content
 *
 * Wenn neuer Content zur Seite hinzugefügt wird (z.B. Alerts, Modals),
 * sollte der Focus des Users dorthin geleitet werden für bessere UX.
 */

export const useFocusManagement = () => {
    /**
     * Fokussiert neu hinzugefügten Content
     * @param selector - CSS Selector des zu fokussierenden Elements
     * @param options - Optional scroll behavior
     */
    const focusNewContent = (
        selector: string,
        options?: { scroll?: boolean; delay?: number }
    ) => {
        const { scroll = true, delay = 100 } = options || {};

        nextTick(() => {
            setTimeout(() => {
                const element = document.querySelector<HTMLElement>(selector);
                if (element) {
                    // Mache Element fokussierbar (falls nicht bereits)
                    if (!element.hasAttribute("tabindex")) {
                        element.setAttribute("tabindex", "-1");
                    }

                    // Fokussiere Element
                    element.focus({ preventScroll: !scroll });

                    // Optional: Scroll zu Element
                    if (scroll) {
                        element.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                    }
                }
            }, delay);
        });
    };

    /**
     * Fokussiert das erste fehlerhafte Formular-Feld
     */
    const focusFirstError = (formSelector = "form") => {
        nextTick(() => {
            const form = document.querySelector(formSelector);
            if (!form) return;

            // Suche nach Invalid-Fields
            const invalidField = form.querySelector<HTMLElement>(
                'input:invalid, select:invalid, textarea:invalid, [aria-invalid="true"]'
            );

            if (invalidField) {
                invalidField.focus();
                invalidField.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        });
    };

    /**
     * Gibt Focus zurück an das Element, das vor einer Aktion Focus hatte
     */
    const createFocusReturn = () => {
        const previouslyFocused = document.activeElement as HTMLElement;

        return () => {
            if (
                previouslyFocused &&
                typeof previouslyFocused.focus === "function"
            ) {
                nextTick(() => {
                    previouslyFocused.focus();
                });
            }
        };
    };

    /**
     * Prüft ob Element im Viewport ist
     */
    const isInViewport = (element: HTMLElement): boolean => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    /**
     * Fokussiert Element nur wenn es nicht im Viewport ist
     */
    const focusIfOffscreen = (selector: string) => {
        const element = document.querySelector<HTMLElement>(selector);
        if (element && !isInViewport(element)) {
            focusNewContent(selector);
        }
    };

    return {
        focusNewContent,
        focusFirstError,
        createFocusReturn,
        focusIfOffscreen,
    };
};
