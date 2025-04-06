import { composeDid } from './api/composeDid.js';
import { publishDid } from './api/publishDid.js';
import { compareDidDocuments } from './api/compareDidDocuments.js';

// Named exports (for ESM)
export { composeDid as composeDid } from './api/composeDid.js';
export { publishDid as publishDid } from './api/publishDid.js';
export { compareDidDocuments as compareDidDocuments } from './api/compareDidDocuments.js';

// Default export (for CJS)
export default {
  composeDid,
  publishDid,
  compareDidDocuments,
};
