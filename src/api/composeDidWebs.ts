import { Did } from '../core/Did.js';
import { generateDid } from '../core/generators/generateDid.js';

export const composeDidWebs = (
  host: string,
  aid: string,
  path = '',
  port?: number
): Did => generateDid(host, aid, path, port);
