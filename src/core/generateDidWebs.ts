import { isValidDidWebs } from '../utils/validators/isValidDidWebs.js';

export const generateDidWebs = (
  host: string,
  aid: string,
  path = '',
  port?: number
): string => {
  if (!host || !aid) {
    throw new Error('Host and AID are required');
  }
  const result = `did:webs:${host}${port ? `%3A${port}` : ''}${path.replace(/\//g, ':')}:${aid}`;
  console.log(`Generated DID WEBS: ${result}`);
  if (isValidDidWebs(result)) {
    return result;
  }
  throw new Error('Invalid input');
};
