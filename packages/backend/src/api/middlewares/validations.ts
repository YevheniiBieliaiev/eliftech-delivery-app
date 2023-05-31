import type { Request, Response, NextFunction } from 'express';
import type { ISignUp, INewOrder } from '@interfaces';
import {
  emailValidation,
  loginValidation,
  passwordValidation,
} from '@validation';
import { HttpError } from '@helpers';
import { HttpStatusCode } from '@enums';

export const signUpValidation = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const { name, email, password } = <ISignUp>req?.body;

  const isValidLogin = loginValidation(name);

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

export const orderValidation = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const { personalData, products } = <INewOrder>req?.body;
  console.log(personalData, products);

  next();
};
