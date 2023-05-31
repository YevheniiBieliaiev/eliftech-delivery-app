export interface IUserHashes {
  salt: string;
  passwordHash: string;
}

export interface IUserCreate extends IUserHashes {
  name: string;
  email: string;
}
