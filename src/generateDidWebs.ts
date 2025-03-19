import { isValidDidWebs } from './utils/validators/isValidDidWebs.js';

export const generateDidWebs = (
  host: string,
  aid: string,
  path = '',
  port?: number
): string => {
  const result = `did:webs:${host}${port ? `%3A${port}` : ''}${path.replace(/\//g, ':')}:${aid}`;
  if (isValidDidWebs(result)) {
    return result;
  }
  throw new Error('Invalid input');
};
