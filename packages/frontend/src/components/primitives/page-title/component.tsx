import { useTitle } from 'hooks';
import type { PageTitleProps } from './types';
import { setTitle } from './utils';

export const PageTitle = ({ children, title = '' }: PageTitleProps) => {
  useTitle(setTitle(title));

  return <>{children}</>;
};
