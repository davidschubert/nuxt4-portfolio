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
            format?: "avif" | "webp" | "jpg" | "png";
            loading?: "lazy" | "eager";
            sizes?: string;
        } = {}
    ) => {
        const {
            width,
            height,
            quality = 75,
            format = "avif",
            loading = "lazy",
            sizes,
        } = options;

        return {
            src,
            width,
            height,
            quality,
            format,
            loading,
            sizes,
            densities: "1x 2x",
        };
    };

    return {
        getImageProps,
    };
};
