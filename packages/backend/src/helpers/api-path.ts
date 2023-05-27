import type { ApiRoutes } from '@enums';

export const apiPath = (mainPath: ApiRoutes, subPath = ''): string =>
  `${mainPath}${subPath}`;
