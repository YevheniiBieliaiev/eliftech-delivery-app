import type { IUserModel } from '@interfaces';

export interface IUserMap
  extends Omit<
    IUserModel,
    'createdAt' | 'updatedAt' | 'salt' | 'passwordHash'
  > {}
