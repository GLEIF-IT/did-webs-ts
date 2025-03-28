import { composeDidWebs } from '../core/composeDidWebs.js';

export const getDidWebs = (
  host: string,
  cred: string,
  path = '',
  port?: number
): string => {
  const { d: aid } = JSON.parse(cred);
  return composeDidWebs(host, aid, path, port);
};
