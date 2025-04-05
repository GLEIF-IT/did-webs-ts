import { Did } from '../../core/Did.js';

export const generateDidWeb = (did: Did): string =>
  did.replace(/^did:webs:(.+)$/, 'did:web:$1');
