export default {
    plugins: {
        // Tailwind wird automatisch von @tailwindcss/vite Plugin gehandhabt
        // cssnano für Production-Builds
        ...(process.env.NODE_ENV === "production"
            ? {
                  cssnano: {
                      preset: [
                          "default",
                          {
                              discardComments: {
                                  removeAll: true,
                              },
                              normalizeWhitespace: true,
                              minifyFontValues: true,
                              minifySelectors: true,
                          },
                      ],
                  },
              }
            : {}),
    },
};
