import { Router } from 'express';
import { AuthRoutes, type ApiRoutes } from '@enums';
import type { Services } from '@services';
import type { ISignUp, ISignIn } from '@interfaces';
import { apiPath } from '@helpers';
import { requestWrapper, signUpValidation } from '@middlewares';

export const initAuthRouter = (services: Services, path: ApiRoutes): Router => {
  const router = Router();

  router.post(
    apiPath(path, AuthRoutes.SIGN_UP),
    signUpValidation,
    requestWrapper(async (req) => {
      const { name, email, password } = <ISignUp>req?.body;

      const user = await services.authServices.createUser({
        name,
        email,
        password,
      });

      return user;
    }),
  );

  router.post(
    apiPath(path, AuthRoutes.SIGN_IN),
    requestWrapper(async (req) => {
      const { email, password } = <ISignIn>req?.body;

      const user = await services.authServices.signIn({ email, password });

      return user;
    }),
  );

  return router;
};
