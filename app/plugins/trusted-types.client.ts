/**
 * Trusted Types Plugin für DOM-based XSS Schutz
 *
 * Verhindert gefährliche DOM-Operationen wie:
 * - element.innerHTML = userInput (UNSICHER)
 * - eval(userInput) (UNSICHER)
 * - document.write(userInput) (UNSICHER)
 */

export default defineNuxtPlugin(() => {
    // Nur im Browser und wenn Trusted Types unterstützt wird
    if (!import.meta.client || !window.trustedTypes) {
        return;
    }

    try {
        // Helper function to safely create policy
        const createPolicySafely = (
            name: string,
            config: {
                createHTML?: (input: string) => string;
                createScript?: (input: string) => string;
                createScriptURL?: (input: string) => string;
            }
        ) => {
            try {
                return window.trustedTypes!.createPolicy(name, config);
            } catch (e) {
                // Policy already exists, ignore
                return null;
            }
        };

        // Policy für Vue/Nuxt Framework
        if (!window.trustedTypes.defaultPolicy) {
            createPolicySafely("default", {
                createHTML: (input: string) => {
                    // Erlaubt Vue's Template-Syntax
                    // In Production: Strikte Validierung
                    if (import.meta.dev) {
                        return input;
                    }

                    // Sanitize in Production
                    // Blockiert gefährliche Tags und Attribute
                    const dangerousPatterns = [
                        /<script[^>]*>.*?<\/script>/gi,
                        /javascript:/gi,
                        /on\w+\s*=/gi, // onclick, onerror, etc.
                        /<iframe/gi,
                        /<embed/gi,
                        /<object/gi,
                    ];

                    let sanitized = input;
                    dangerousPatterns.forEach((pattern) => {
                        sanitized = sanitized.replace(pattern, "");
                    });

                    return sanitized;
                },
                createScript: (input: string) => {
                    // Blockiert eval und gefährliche Scripts
                    if (
                        input.includes("eval(") ||
                        input.includes("Function(")
                    ) {
                        console.warn(
                            "Trusted Types: Blocked eval or Function constructor"
                        );
                        return "";
                    }
                    return input;
                },
                createScriptURL: (input: string) => {
                    // Nur erlaubte Script-URLs
                    try {
                        const url = new URL(input, window.location.origin);

                        // Erlaube nur same-origin oder erlaubte CDNs
                        const allowedOrigins = [
                            window.location.origin,
                            // Füge vertrauenswürdige CDNs hinzu
                            // 'https://cdn.example.com'
                        ];

                        if (
                            allowedOrigins.some(
                                (origin) => url.origin === origin
                            )
                        ) {
                            return input;
                        }

                        console.warn(
                            `Trusted Types: Blocked script URL from untrusted origin: ${url.origin}`
                        );
                        return "";
                    } catch {
                        console.warn(`Trusted Types: Invalid URL: ${input}`);
                        return "";
                    }
                },
            });
        }

        // Vue-spezifische Policy
        createPolicySafely("vue-html", {
            createHTML: (input: string) => {
                // Vue's v-html Direktive
                return input;
            },
        });

        // Nuxt-spezifische Policy
        createPolicySafely("nuxt-app", {
            createHTML: (input: string) => input,
            createScript: (input: string) => input,
            createScriptURL: (input: string) => input,
        });

        console.log("✅ Trusted Types policies initialized");
    } catch (error) {
        console.error("Failed to initialize Trusted Types:", error);
    }
});

// TypeScript Declarations
declare global {
    interface Window {
        trustedTypes?: {
            createPolicy: (
                name: string,
                policy: {
                    createHTML?: (input: string) => string;
                    createScript?: (input: string) => string;
                    createScriptURL?: (input: string) => string;
                }
            ) => TrustedTypePolicy;
            defaultPolicy: TrustedTypePolicy | null;
        };
    }

    interface TrustedTypePolicy {
        name: string;
        createHTML(input: string): TrustedHTML;
        createScript(input: string): TrustedScript;
        createScriptURL(input: string): TrustedScriptURL;
    }

    interface TrustedHTML {
        toString(): string;
    }

    interface TrustedScript {
        toString(): string;
    }

    interface TrustedScriptURL {
        toString(): string;
    }
}
