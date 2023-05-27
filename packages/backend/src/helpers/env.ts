import { Environment } from '@enums';

type ProcessEnvKeys =
  | 'DATABASE_URL'
  | 'NODE_ENV'
  | 'PORT'
  | 'APP_URL'
  | 'APP_NAME';

type EnvKeys = ProcessEnvKeys;

export const getEnv = (key: EnvKeys): string | undefined => process.env[key];

export const isProduction = getEnv('NODE_ENV') === Environment.PRODUCTION;
