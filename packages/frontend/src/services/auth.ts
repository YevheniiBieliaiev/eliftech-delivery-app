import { http } from 'helpers';
import { ApiRoutes, AuthRoutes } from 'common/enums';
import type { ISignUp, ISignIn, IUserResponse } from 'common/interfaces';

export const signUp = (data: ISignUp): Promise<IUserResponse> =>
  http.post({
    url: `${ApiRoutes.AUTH}${AuthRoutes.SIGN_UP}`,
    body: { ...data },
  });

export const signIn = (data: ISignIn): Promise<IUserResponse> =>
  http.post({
    url: `${ApiRoutes.AUTH}${AuthRoutes.SIGN_IN}`,
    body: { ...data },
  });
