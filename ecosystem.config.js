const fs = require('fs');
const path = require('path');

const pathEnv = path.join(
  '../../../',
  '.env',
);

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
  }, {'NODE_ENV': 'production'});
};

module.exports = {
  apps: [
    {
      name: 'delivery-app.com.ua',
      script: 'npm',
      args: 'run start:be:serve',
      env_production: {
        ...envObj(),
      },
    },
  ],
};
