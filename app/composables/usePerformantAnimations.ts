/**
 * Composable für performante Scroll-Animationen ohne Forced Reflows
 *
 * Verwendung:
 * const { observeElements } = usePerformantAnimations()
 * onMounted(() => {
 *   observeElements('section')
 * })
 */

export const usePerformantAnimations = () => {
    /**
     * Beobachtet Elemente und animiert sie beim Erscheinen im Viewport
     * @param selector - CSS Selector für die zu beobachtenden Elemente
     */
    const observeElements = (selector: string) => {
        // Use requestIdleCallback if available for better performance
        const scheduleWork = (callback: () => void) => {
            if ("requestIdleCallback" in window) {
                requestIdleCallback(callback);
            } else {
                requestAnimationFrame(callback);
            }
        };

        scheduleWork(() => {
            const observerOptions: IntersectionObserverInit = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            };

            const observer = new IntersectionObserver((entries) => {
                // Batch all DOM changes in a single requestAnimationFrame
                requestAnimationFrame(() => {
                    // Read all properties first (batch reads)
                    const updates = entries
                        .filter((entry) => entry.isIntersecting)
                        .map((entry) => entry.target);

                    // Then write all changes (batch writes)
                    updates.forEach((target) => {
                        (target as HTMLElement).style.opacity = "1";
                        (target as HTMLElement).style.transform =
                            "translateY(0)";
                        // Stop observing to prevent unnecessary checks
                        observer.unobserve(target);
                    });
                });
            }, observerOptions);

            // Initialize elements
            const elements = document.querySelectorAll(selector);

            // Batch initial style changes
            requestAnimationFrame(() => {
                elements.forEach((element) => {
                    const htmlElement = element as HTMLElement;
                    // Set styles that don't trigger layout
                    htmlElement.style.opacity = "0";
                    htmlElement.style.transform = "translateY(20px)";
                    htmlElement.style.transition =
                        "opacity 0.6s ease-out, transform 0.6s ease-out";

                    // Start observing
                    observer.observe(element);
                });
            });
        });
    };

    /**
     * Debounce-Funktion für Event-Handler
     */
    const debounce = <T extends (...args: any[]) => any>(
        func: T,
        wait: number
    ): ((...args: Parameters<T>) => void) => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        return (...args: Parameters<T>) => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    };

    /**
     * Throttle-Funktion für Scroll-Events
     */
    const throttle = <T extends (...args: any[]) => any>(
        func: T,
        limit: number
    ): ((...args: Parameters<T>) => void) => {
        let inThrottle: boolean;

        return (...args: Parameters<T>) => {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    return {
        observeElements,
        debounce,
        throttle,
    };
};
