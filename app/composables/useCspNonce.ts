/**
 * Composable für CSP Nonce-Zugriff
 *
 * Verwendung:
 * const nonce = useCspNonce()
 * // In Templates: <script :nonce="nonce">...</script>
 */

export const useCspNonce = () => {
    if (import.meta.server) {
        const event = useRequestEvent();
        return event?.context?.cspNonce || "";
    }
    // Client-side: Nonce ist bereits in den Tags
    return "";
};
