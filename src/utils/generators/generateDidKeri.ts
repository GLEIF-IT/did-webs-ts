import { Did } from '../../core/Did.js';

export const generateDidKeri = (did: Did): string =>
  did.replace(/^did:webs:(?:[^:]+:)*([^:]+)$/, 'did:keri:$1');
