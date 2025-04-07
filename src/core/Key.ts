import { isValidEd25519Cesr } from '../utils/validators/isValidEd25519Cesr.js';
import { isValidSecp256k1Cesr } from '../utils/validators/isValidSecp256k1Cesr.js';

// // Key can't be any old string, it must come from the 'ctor' function
export type Ed25519Key = string & { readonly __brand: unique symbol };
export type Secp256k1Key = string & { readonly __brand: unique symbol };
export type Key = Ed25519Key | Secp256k1Key;

// Runtime validator
export const createKey = (key: string): Key => {
  if (isValidEd25519Cesr(key)) return key as Ed25519Key;
  else if (isValidSecp256k1Cesr(key)) return key as Secp256k1Key;
  else throw new Error('Invalid key format');
};
