import { isValidDidWebs } from '../utils/validators/isValidDidWebs.js';

// DID can't be any old string, it must come from the 'ctor' function
export type Did = string & { readonly __brand: unique symbol };

// Runtime validator
export const createDid = (did: string): Did => {
  if (!isValidDidWebs(did)) {
    throw new Error('Invalid DID format');
  }
  return did as Did;
};
