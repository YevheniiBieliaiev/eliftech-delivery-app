module.exports = {
  apps: [
    {
      name: 'delivery-app.com',
      script: './build/server.js',
      watch: true,
      ignore_watch: ['node_modules', 'logs'],
      env_production: {
        'PORT': 3001,
        'NODE_ENV': 'production',
      },
    },
  ],
};
