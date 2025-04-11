// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: "express-health-check",
      script: "./server.js", // Tetap pakai ESM di sini
      interpreter: "node",
      interpreter_args: "--enable-source-maps",
      exec_mode: "fork",
      instances: 1,
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 4000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4000,
      },
    },
  ],
};
