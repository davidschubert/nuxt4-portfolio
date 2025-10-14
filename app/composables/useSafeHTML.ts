/**
 * Composable für sicheres HTML-Rendering mit Trusted Types
 *
 * Verwendung:
 * const { sanitizeHTML, isTrustedTypesSupported } = useSafeHTML()
 * const safeContent = sanitizeHTML(userInput)
 */

export const useSafeHTML = () => {
    /**
     * Prüft, ob Trusted Types vom Browser unterstützt wird
     */
    const isTrustedTypesSupported = computed(() => {
        if (!import.meta.client) return false;
        return "trustedTypes" in window;
    });

    /**
     * Sanitisiert HTML-Strings für sichere DOM-Insertion
     */
    const sanitizeHTML = (input: string): string | TrustedHTML => {
        if (!import.meta.client) {
            return input;
        }

        // Wenn Trusted Types verfügbar, nutze Policy
        if (window.trustedTypes) {
            try {
                const policy =
                    window.trustedTypes.getPolicy("default") ||
                    window.trustedTypes.createPolicy("sanitizer", {
                        createHTML: (html: string) => {
                            // Einfache Sanitization
                            const temp = document.createElement("div");
                            temp.textContent = html;
                            return temp.innerHTML;
                        },
                    });

                return policy.createHTML(input);
            } catch (error) {
                console.error("Trusted Types sanitization failed:", error);
                // Fallback: Escape HTML
                return escapeHTML(input);
            }
        }

        // Fallback ohne Trusted Types
        return escapeHTML(input);
    };

    /**
     * Escaped HTML für sichere Darstellung
     */
    const escapeHTML = (input: string): string => {
        const div = document.createElement("div");
        div.textContent = input;
        return div.innerHTML;
    };

    /**
     * Erstellt sichere Script-URLs
     */
    const createSafeScriptURL = (url: string): string | TrustedScriptURL => {
        if (!import.meta.client || !window.trustedTypes) {
            return url;
        }

        try {
            const policy = window.trustedTypes.getPolicy("default");
            if (policy?.createScriptURL) {
                return policy.createScriptURL(url);
            }
        } catch (error) {
            console.error("Failed to create safe script URL:", error);
        }

        return url;
    };

    /**
     * Sanitisiert User-Input für sichere v-html Verwendung
     */
    const sanitizeUserInput = (input: string): string => {
        // Entfernt gefährliche Elemente und Attribute
        let sanitized = input;

        // Entfernt Script-Tags
        sanitized = sanitized.replace(
            /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            ""
        );

        // Entfernt Event-Handler
        sanitized = sanitized.replace(/\bon\w+\s*=\s*["'][^"']*["']/gi, "");

        // Entfernt javascript: URLs
        sanitized = sanitized.replace(/javascript:/gi, "");

        // Entfernt gefährliche Tags
        const dangerousTags = ["iframe", "embed", "object", "link", "meta"];
        dangerousTags.forEach((tag) => {
            const regex = new RegExp(`<${tag}\\b[^>]*>`, "gi");
            sanitized = sanitized.replace(regex, "");
        });

        return sanitized;
    };

    return {
        isTrustedTypesSupported,
        sanitizeHTML,
        sanitizeUserInput,
        createSafeScriptURL,
        escapeHTML,
    };
};
