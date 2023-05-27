export interface UserModel {
  id: string;
  login: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
  updatedAt: Date;
}
