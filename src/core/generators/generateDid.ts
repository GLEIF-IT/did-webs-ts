import { Did, createDid } from '../Did.js';

export const generateDid = (
  host: string,
  aid: string,
  path = '',
  port?: number
): Did => {
  if (!host || !aid) {
    throw new Error('Host and AID are required');
  }
  return createDid(
    `did:webs:${host}${port ? `%3A${port}` : ''}${path.replace(/\//g, ':')}:${aid}`
  );
};
