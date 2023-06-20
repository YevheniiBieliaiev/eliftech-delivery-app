const fs = require('fs');
const path = require('path');

const pathEnv = path.join(
  __dirname,
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
  console.log(split);
  
  return split.reduce((env, variable) => {
    const [key, value] = variable.split('=');

    return { ...env, [key]: value };
  }, {'NODE_ENV': 'production'});
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
