import { ErrorMessages } from '@enums';
import {
  NAME_REGEXP,
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

export const loginValidation = (name: string): string | null => {
  const length = name.trim().length;
  if (
    length < ValidationRanges.MIN_NAME_SYMBOLS ||
    length > ValidationRanges.MAX_NAME_SYMBOLS
  ) {
    return ErrorMessages.NAME_VALIDATION;
  }

  const isPattern = NAME_REGEXP.test(name);
  if (!isPattern) {
    return ErrorMessages.NAME_VALIDATION;
  }

  return null;
};
