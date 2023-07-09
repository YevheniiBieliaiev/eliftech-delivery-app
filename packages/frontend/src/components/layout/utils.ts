import type { Location } from 'react-router-dom';
import { ClientRoutes } from 'common/enums';
import type { DefineLocation } from './types';

export const setTitle = (text: string) => (text ? `DA | ${text}` : 'DA');

export const defineLocation = (location: Location): DefineLocation => {
  const signin = new RegExp(ClientRoutes.SIGNIN);
  const signup = new RegExp(ClientRoutes.SIGNUP);

  return {
    signin: signin.test(location.pathname),
    signup: signup.test(location.pathname),
  };
};
