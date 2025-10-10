/**
 * Composable für optimierte Bildladung mit Nuxt Image
 *
 * Verwendung:
 * const { getImageProps } = useOptimizedImage()
 * const imgProps = getImageProps('/images/hero.jpg', { width: 800, quality: 80 })
 */

export const useOptimizedImage = () => {
    const getImageProps = (
        src: string,
        options: {
            width?: number;
            height?: number;
            quality?: number;
            format?: "webp" | "avif" | "jpg" | "png";
            loading?: "lazy" | "eager";
        } = {}
    ) => {
        const {
            width,
            height,
            quality = 80,
            format = "webp",
            loading = "lazy",
        } = options;

        return {
            src,
            width,
            height,
            quality,
            format,
            loading,
        };
    };

    return {
        getImageProps,
    };
};
