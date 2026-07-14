// ecosystem.config.cjs
module.exports = {
    apps: [
        {
            name: "pukalanistudio",
            script: ".output/server/index.mjs",
            instances: 1, // Einzel-Instanz (Portfolio-Seite braucht keinen Cluster)
            exec_mode: "fork", // Fork-Modus (ein einzelner Prozess)
            env: {
                NODE_ENV: "production",
                NITRO_HOST: "127.0.0.1",
                NITRO_PORT: "3001",
                PORT: "3001",
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
