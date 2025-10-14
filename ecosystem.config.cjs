// ecosystem.config.cjs
module.exports = {
    apps: [
        {
            name: "pukalanistudio",
            script: ".output/server/index.mjs",
            env: {
                NODE_ENV: "production",
                NITRO_HOST: "127.0.0.1",
                NITRO_PORT: "3000",
                PORT: "3000",
            },
        },
    ],
};
