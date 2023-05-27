import type { Request, Response, NextFunction } from 'express';
import type { ISignUp } from '@interfaces';
import {
  emailValidation,
  loginValidation,
  passwordValidation,
} from '@validation';
import { HttpError } from '@helpers';
import { HttpStatusCode } from '@enums';

export const signUpValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { login, email, password } = <ISignUp>req?.body;

  const isValidLogin = loginValidation(login);

  const isValidEmail = emailValidation(email);

  const isValidPassword = passwordValidation(password);

  const error = isValidLogin || isValidEmail || isValidPassword;
  if (error) {
    throw new HttpError({
      status: HttpStatusCode.BAD_REQUEST,
      message: error,
    });
  }

  next();
};
