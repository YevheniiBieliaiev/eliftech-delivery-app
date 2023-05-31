import path from 'path';
import fs from 'fs';
import util from 'util';
import { v4 as uuidv4 } from 'uuid';
import type {
  IUserModel,
  IUserHashes,
  IUserCreate,
  IUserMap,
} from '@interfaces';
import { userMap } from '@mappers';

export class AuthRepository {
  private pathToDb: string;

  private usersDBFile = 'users.json';

  constructor({ pathToDb }: { pathToDb: string }) {
    this.pathToDb = pathToDb;
  }

  public async createUser({
    email,
    name,
    passwordHash,
    salt,
  }: IUserCreate): Promise<IUserMap> {
    const usersReadPromise = util.promisify(fs.readFile);
    const usersWritePromise = util.promisify(fs.writeFile);

    const users = <IUserModel[]>(
      JSON.parse(
        await usersReadPromise(
          path.join(this.pathToDb, this.usersDBFile),
          'utf-8',
        ),
      )
    );

    const userDto: IUserModel = {
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
      name,
      email,
      salt,
      passwordHash,
    };

    users.push(userDto);

    await usersWritePromise(
      path.join(this.pathToDb, this.usersDBFile),
      JSON.stringify(users),
      'utf-8',
    );

    return userMap(userDto);
  }

  public async findUserByEmail({
    email,
  }: {
    email: string;
  }): Promise<IUserModel | undefined> {
    const usersReadPromise = util.promisify(fs.readFile);

    const users = <IUserModel[]>(
      JSON.parse(
        await usersReadPromise(
          path.join(this.pathToDb, this.usersDBFile),
          'utf-8',
        ),
      )
    );

    const user = users.find((u) => u.email === email);

    return user;
  }

  public async findUserById({
    userId,
  }: {
    userId: string;
  }): Promise<IUserModel | undefined> {
    const usersReadPromise = util.promisify(fs.readFile);

    const users = <IUserModel[]>(
      JSON.parse(
        await usersReadPromise(
          path.join(this.pathToDb, this.usersDBFile),
          'utf-8',
        ),
      )
    );

    const user = users.find((u) => u.id === userId);

    return user;
  }

  public async getUserHashes({
    userId,
  }: {
    userId: string;
  }): Promise<IUserHashes | null> {
    const usersReadPromise = util.promisify(fs.readFile);

    const users = <IUserModel[]>(
      JSON.parse(
        await usersReadPromise(
          path.join(this.pathToDb, this.usersDBFile),
          'utf-8',
        ),
      )
    );

    const user = users.find((u) => u.id === userId);

    if (user) {
      return {
        salt: user.salt,
        passwordHash: user.passwordHash,
      };
    }

    return null;
  }
}
