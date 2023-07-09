import type { ISignUp, ISignUpForm } from 'common/interfaces';

export class Candidate implements ISignUp {
  readonly name: string;

  readonly email: string;

  readonly password: string;

  constructor(data: ISignUpForm) {
    this.name = data.name;
    this.email = data.email;
    this.password = data.password;
  }
}
