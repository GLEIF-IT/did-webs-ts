import { Credential } from '../core/credential/Credential.js';
import { composeDidWebs } from '../core/composeDidWebs.js';

export const getDidWebs = (
  host: string,
  cred: Credential,
  path = '',
  port?: number
): string => {
  return composeDidWebs(host, cred.i, path, port);
};
