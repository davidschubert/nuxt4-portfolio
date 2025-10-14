/**
 * Composable für Accessibility-Features
 *
 * Bietet Utilities für:
 * - Keyboard Navigation
 * - Focus Management
 * - ARIA Live Regions
 * - Screen Reader Announcements
 */

export const useAccessibility = () => {
    /**
     * Prüft, ob User mit Tastatur navigiert
     */
    const isKeyboardUser = ref(false);

    /**
     * Fokussiert ein Element programmatisch
     */
    const focusElement = (selector: string | HTMLElement) => {
        if (!import.meta.client) return;

        const element =
            typeof selector === "string"
                ? document.querySelector<HTMLElement>(selector)
                : selector;

        if (element) {
            // Warte auf nächsten Frame für bessere Zuverlässigkeit
            requestAnimationFrame(() => {
                element.focus({ preventScroll: false });
            });
        }
    };

    /**
     * Trapped Focus für Modals/Dialogs
     */
    const trapFocus = (container: HTMLElement) => {
        if (!import.meta.client) return () => {};

        const focusableElements = container.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key !== "Tab") return;

            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        };

        container.addEventListener("keydown", handleKeyDown);

        // Fokussiere erstes Element
        firstFocusable?.focus();

        // Cleanup
        return () => {
            container.removeEventListener("keydown", handleKeyDown);
        };
    };

    /**
     * Screen Reader Announcement
     */
    const announce = (
        message: string,
        priority: "polite" | "assertive" = "polite"
    ) => {
        if (!import.meta.client) return;

        const announcement = document.createElement("div");
        announcement.setAttribute("role", "status");
        announcement.setAttribute("aria-live", priority);
        announcement.setAttribute("aria-atomic", "true");
        announcement.className = "sr-only";
        announcement.textContent = message;

        document.body.appendChild(announcement);

        // Entferne nach kurzer Zeit
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    };

    /**
     * Keyboard Event Handler
     */
    const onEnterOrSpace = (callback: () => void) => {
        return (event: KeyboardEvent) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                callback();
            }
        };
    };

    /**
     * Macht ein Element keyboard-accessible
     */
    const makeKeyboardAccessible = (
        element: HTMLElement,
        callback: () => void
    ) => {
        // Füge tabindex hinzu falls nicht vorhanden
        if (!element.hasAttribute("tabindex")) {
            element.setAttribute("tabindex", "0");
        }

        // Füge role hinzu falls nicht vorhanden
        if (!element.hasAttribute("role")) {
            element.setAttribute("role", "button");
        }

        // Click handler
        const handleClick = () => callback();

        // Keyboard handler
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                callback();
            }
        };

        element.addEventListener("click", handleClick);
        element.addEventListener("keydown", handleKeyDown);

        // Cleanup
        return () => {
            element.removeEventListener("click", handleClick);
            element.removeEventListener("keydown", handleKeyDown);
        };
    };

    /**
     * Tracked Keyboard Navigation
     */
    const trackKeyboardUsage = () => {
        if (!import.meta.client) return () => {};

        const handleFirstTab = (e: KeyboardEvent) => {
            if (e.key === "Tab") {
                isKeyboardUser.value = true;
                document.body.classList.add("user-is-tabbing");
            }
        };

        const handleMouseDown = () => {
            isKeyboardUser.value = false;
            document.body.classList.remove("user-is-tabbing");
        };

        window.addEventListener("keydown", handleFirstTab);
        window.addEventListener("mousedown", handleMouseDown);

        return () => {
            window.removeEventListener("keydown", handleFirstTab);
            window.removeEventListener("mousedown", handleMouseDown);
        };
    };

    /**
     * Scrollt zu Element mit Fokus
     */
    const scrollToAndFocus = (
        selector: string | HTMLElement,
        options?: ScrollIntoViewOptions
    ) => {
        if (!import.meta.client) return;

        const element =
            typeof selector === "string"
                ? document.querySelector<HTMLElement>(selector)
                : selector;

        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center",
                ...options,
            });

            // Fokussiere nach Scroll
            setTimeout(() => {
                element.focus({ preventScroll: true });
            }, 300);
        }
    };

    /**
     * Prüft auf prefers-reduced-motion
     */
    const prefersReducedMotion = computed(() => {
        if (!import.meta.client) return false;
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    });

    /**
     * Skip to main content
     */
    const skipToContent = () => {
        if (!import.meta.client) return;

        const mainContent =
            document.querySelector<HTMLElement>("main, #content");
        if (mainContent) {
            mainContent.setAttribute("tabindex", "-1");
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Auto-track keyboard usage
    if (import.meta.client) {
        onMounted(() => {
            const cleanup = trackKeyboardUsage();
            onUnmounted(cleanup);
        });
    }

    return {
        isKeyboardUser,
        focusElement,
        trapFocus,
        announce,
        onEnterOrSpace,
        makeKeyboardAccessible,
        scrollToAndFocus,
        prefersReducedMotion,
        skipToContent,
    };
};
