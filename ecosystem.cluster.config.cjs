module.exports = {
  apps: [
    {
      name: "express-health-check-cluster",
      script: "./server.js",
      interpreter: "node",
      interpreter_args: "--enable-source-maps",
      exec_mode: "cluster",
      instances: "max",
      watch: false,
      env: {
        NODE_ENV: "development",
        PORT: 4000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 4001,
      },
    },
  ],
};
