export interface IUserModel {
  id: string;
  name: string;
  email: string;
  salt: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}
