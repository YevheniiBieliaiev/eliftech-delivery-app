import { pbkdf2Sync, randomBytes } from 'crypto';
import type { AuthRepository } from '@repositories';
import type { IUserHashes } from '@interfaces';

export class HashServices {
  private authRepository: AuthRepository;

  private iterations = 92716;

  private keylen = 128;

  private digest = 'sha512';

  private passwordSaltSize = 128;

  private generateSalt(size: number): string {
    return randomBytes(size).toString('hex');
  }

  private generatePasswordHash(password: string, salt: string): string {
    return pbkdf2Sync(
      password,
      salt,
      this.iterations,
      this.keylen,
      this.digest,
    ).toString('hex');
  }

  constructor({ authRepository }: { authRepository: AuthRepository }) {
    this.authRepository = authRepository;
  }

  public setPassword({ password }: { password: string }): IUserHashes {
    const salt = this.generateSalt(this.passwordSaltSize);
    const passwordHash = this.generatePasswordHash(password, salt);

    return {
      salt,
      passwordHash,
    };
  }

  public async checkPassword({
    userId,
    password,
  }: {
    userId: string;
    password: string;
  }): Promise<boolean> {
    const { salt, passwordHash } = (await this.authRepository.getUserHashes({
      userId,
    })) as IUserHashes;

    return passwordHash === this.generatePasswordHash(password, salt);
  }
}
