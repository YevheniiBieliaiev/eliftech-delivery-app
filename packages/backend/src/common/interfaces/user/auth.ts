export interface IUserHashes {
  salt: string;
  passwordHash: string;
}

export interface IUserCreate extends IUserHashes {
  login: string;
  email: string;
}
