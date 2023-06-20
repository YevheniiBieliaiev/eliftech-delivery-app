const fs = require('fs');
const path = require('path');

const pathEnv = path.join(__dirname, '/var/www/delivery-app.com.ua', '.env');

/**
 *
 * @returns as object env variables with their values
 */
const envObj = () => {
  const readFile = fs.readFileSync(pathEnv, 'utf-8').trim();
  const split = readFile.split('\n');

  return split.reduce((env, variable) => {
    const [key, value] = variable.split('=');

    return { ...env, [key]: value };
  }, {});
};

module.exports = {
  apps: [
    {
      name: 'delivery-app.com.ua',
      script: path.join('./packages/backend', 'build', 'server.js'),
      env_production: {
        ...envObj(),
      },
    },
  ],
};
