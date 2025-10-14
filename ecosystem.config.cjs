// ecosystem.config.cjs
module.exports = {
    apps: [
        {
            name: "pukalanistudio",
            script: ".output/server/index.mjs",
            instances: "max", // Nutzt alle CPU-Kerne für optimale Performance
            exec_mode: "cluster", // Cluster-Modus für Load Balancing
            env: {
                NODE_ENV: "production",
                NITRO_HOST: "127.0.0.1",
                NITRO_PORT: "3000",
                PORT: "3000",
            },
            // Performance & Stability
            max_memory_restart: "500M", // Restart bei hohem Memory-Verbrauch
            min_uptime: "10s", // Mindestlaufzeit vor Neustart
            max_restarts: 10, // Max. Neustarts innerhalb eines Zeitfensters
            restart_delay: 4000, // Verzögerung zwischen Neustarts (ms)
            // Logging
            error_file: "./logs/pm2-error.log",
            out_file: "./logs/pm2-out.log",
            log_date_format: "YYYY-MM-DD HH:mm:ss Z",
            merge_logs: true,
            // Auto-Restart bei File-Änderungen (nur für Development)
            watch: false,
        },
    ],
};
