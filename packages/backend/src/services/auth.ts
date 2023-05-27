import type { AuthRepository } from '@repositories';
import type { HashServices } from '@services';
import type { ISignUp, ISignIn, IUserMap } from '@interfaces';
import { HttpStatusCode, ErrorMessages } from '@enums';
import { HttpError } from '@helpers';
import { userMap } from '@mappers';

export class AuthServices {
  private authRepository: AuthRepository;

  private hashServices: HashServices;

  constructor({
    authRepository,
    hashServices,
  }: {
    authRepository: AuthRepository;
    hashServices: HashServices;
  }) {
    this.authRepository = authRepository;
    this.hashServices = hashServices;
  }

  public async createUser({
    login,
    email,
    password,
  }: ISignUp): Promise<IUserMap> {
    const candidate = await this.authRepository.findUserByEmail({
      email,
    });

    if (candidate) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.EMAIL_EXISTS,
      });
    }

    const { passwordHash, salt } = this.hashServices.setPassword({ password });

    return this.authRepository.createUser({
      login,
      email,
      passwordHash,
      salt,
    });
  }

  public async signIn({ email, password }: ISignIn): Promise<IUserMap> {
    const user = await this.authRepository.findUserByEmail({ email });
    if (!user) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.WRONG_PASSWORD_OR_EMAIL,
      });
    }

    const isCorrectPassword = await this.hashServices.checkPassword({
      userId: user.id,
      password,
    });

    if (!isCorrectPassword) {
      throw new HttpError({
        status: HttpStatusCode.BAD_REQUEST,
        message: ErrorMessages.WRONG_PASSWORD_OR_EMAIL,
      });
    }

    return userMap(user);
  }
}
