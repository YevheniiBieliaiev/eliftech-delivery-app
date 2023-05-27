import type { IUserModel, IUserMap } from '@interfaces';

export const userMap = (user: IUserModel): IUserMap => {
  const { id, login, email } = user;

  return {
    id,
    email,
    login,
  };
};
