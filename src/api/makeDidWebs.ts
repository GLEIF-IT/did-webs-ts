import { generateDidWebs } from '../core/generateDidWebs.js';

export const makeDidWebs = (
  host: string,
  cred: string,
  path = '',
  port?: number
): string => {
  const { d: aid } = JSON.parse(cred);
  return generateDidWebs(host, aid, path, port);
};
