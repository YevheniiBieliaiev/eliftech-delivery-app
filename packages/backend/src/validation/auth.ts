import { ErrorMessages } from '@enums';
import {
  LOGIN_REGEXP,
  EMAIL_REGEXP,
  PASSWORD_REGEXP,
  ValidationRanges,
} from './rules';

export const emailValidation = (email: string): string | null => {
  const length = email.trim().length;
  if (!length) {
    return ErrorMessages.EMAIL_VALIDATION;
  }

  const isPattern = EMAIL_REGEXP.test(email);
  if (!isPattern) {
    return ErrorMessages.EMAIL_VALIDATION;
  }

  return null;
};

export const passwordValidation = (password: string): string | null => {
  const length = password.trim().length;
  if (
    length < ValidationRanges.MIN_PASSWORD_SYMBOLS ||
    length > ValidationRanges.MAX_PASSWORD_SYMBOLS
  ) {
    return ErrorMessages.PASSWORD_VALIDATION;
  }

  const isPattern = PASSWORD_REGEXP.test(password);
  if (!isPattern) {
    return ErrorMessages.PASSWORD_VALIDATION;
  }

  return null;
};

export const loginValidation = (login: string): string | null => {
  const length = login.trim().length;
  if (
    length < ValidationRanges.MIN_LOGIN_SYMBOLS ||
    length > ValidationRanges.MAX_LOGIN_SYMBOLS
  ) {
    return ErrorMessages.LOGIN_VALIDATION;
  }

  const isPattern = LOGIN_REGEXP.test(login);
  if (!isPattern) {
    return ErrorMessages.LOGIN_VALIDATION;
  }

  return null;
};
