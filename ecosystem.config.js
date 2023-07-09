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

const env = envObj();

module.exports = {
  apps: [
    {
      name: env['APP'],
      script: 'npm',
      args: 'run start:be:serve',
      cwd: env['CWD_APP'],
      env_production: {
        PORT: env['PORT'],
        NODE_ENV: env['NODE_ENV'],
        REACT_APP_MAP_KEY: env['REACT_APP_MAP_KEY']
      },
    },
  ],
};
