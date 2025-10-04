// ecosystem.config.cjs
module.exports = {
    apps: [
        {
            name: "{REPOSITORY_NAME}", // z.B. nuxt4-portfolio
            script: ".output/server/index.mjs",
            instances: 1,
            exec_mode: "fork",
            env: {
                NODE_ENV: "production",
                NITRO_HOST: "127.0.0.1",
                NITRO_PORT: "3000",
                PORT: "3000",
            },
        },
    ],
};
