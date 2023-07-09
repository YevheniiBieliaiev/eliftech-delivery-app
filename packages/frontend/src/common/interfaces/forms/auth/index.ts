import type { ISignUp } from 'common/interfaces/requests';

export interface ISignUpForm extends ISignUp {
  confirmPassword: string;
}
