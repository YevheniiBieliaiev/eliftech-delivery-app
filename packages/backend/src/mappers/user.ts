import type { IUserModel, IUserMap } from '@interfaces';

export const userMap = (user: IUserModel): IUserMap => {
  const { id, name, email } = user;

  return {
    id,
    email,
    name,
  };
};
