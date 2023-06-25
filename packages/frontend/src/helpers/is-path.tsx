/**
 * @param {string} pathname - current location
 * @param {string} linkPath - link path
 * @returns {boolean}
 * @description Compares pathname and linkPath
 */

export const isPath = (pathname: string, linkPath: string): boolean =>
  pathname === linkPath;
