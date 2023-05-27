export interface IUserModel {
  id: string;
  login: string;
  email: string;
  salt: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}
