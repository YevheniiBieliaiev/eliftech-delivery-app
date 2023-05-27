import * as dotenv from 'dotenv';
import express, { urlencoded, json } from 'express';
import cors from 'cors';
import { getEnv } from '@helpers';
import { errorHandler, loggerHandler } from '@middlewares';
import { initRepositories } from '@repositories';
import { initServices } from '@services';
import { initRoutes } from '@routes';

dotenv.config();
const app = express();
const port = getEnv('PORT');
const repositories = initRepositories();
const services = initServices({ repositories });
const routes = initRoutes({ services });

app
  .use(cors())
  .use(loggerHandler)
  .use(json())
  .use(urlencoded({ extended: true }))
  .use(routes)
  .use(errorHandler)
  .listen(port, () => console.log(`Server is running on port ${port}`));
