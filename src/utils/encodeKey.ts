import * as R from 'remeda';

import { Key } from '../core/Key.js';
import { isValidEd25519Cesr } from './validators/isValidEd25519Cesr.js';
import { isValidSecp256k1Cesr } from './validators/isValidSecp256k1Cesr.js';
import { base64UrlToBytes } from './base64UrlToBytes.js';
import { bytesToBase64Url } from './bytesToBase64Url.js';

const ps = (N: number): number => (3 - (N % 3)) % 3;

const padBytes = (bytes: Uint8Array): Uint8Array => {
  const padding = ps(bytes.length);
  const paddedBytes = new Uint8Array(bytes.length + padding);
  paddedBytes.set(bytes, padding); // padding is the offset, this will leave the initialized zeros at the beginning
  return paddedBytes;
};

const encodeWith = (code: string) => (rawB64: string) => {
  if (code[0] === '1') {
    return `${code}${rawB64}`;
  } else {
    return `${code}${rawB64.slice(code.length)}`;
  }
};

export const encodeKey = (code: string, decodedKey: string): Key => {
  const key = R.pipe(
    decodedKey,
    base64UrlToBytes,
    padBytes,
    bytesToBase64Url,
    encodeWith(code)
  );
  if (isValidEd25519Cesr(key) || isValidSecp256k1Cesr(key)) return key as Key;
  throw new Error("Can't encode key");
};
