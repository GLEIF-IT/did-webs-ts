// import { Buffer } from 'node:buffer';
import { Key } from '../core/Key.js';
import { isValidEd25519Cesr } from './validators/isValidEd25519Cesr.js';
import { isValidSecp256k1Cesr } from './validators/isValidSecp256k1Cesr.js';

// const base64UrlToBuffer = (base64url: Key): Buffer => {
//   // convert everything into standard base64, including trailing padding in the form of '='
//   const n = base64url.length % 4;
//   const padded = base64url + '='.repeat(n > 0 ? 4 - n : n);
//   const base64String = padded.replace(/-/g, '+').replace(/_/g, '/'); // swap out URL-safe characters for standard base64 characters
//   return Buffer.from(base64String, 'base64');
// };

export const base64UrlToUint8Array = (base64url: string): Uint8Array => {
  const n = base64url.length % 4;
  const padded = base64url + '='.repeat(n > 0 ? 4 - n : n);
  const base64String = padded.replace(/-/g, '+').replace(/_/g, '/');
  const binaryString = atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

const uint8ArrayToBase64 = (buffer: Uint8Array): string => {
  let binary = '';
  const len = buffer.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(buffer[i]);
  }
  return btoa(binary);
};

const uint8ArrayToBase64URL = (buffer: Uint8Array): string =>
  uint8ArrayToBase64(buffer)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');

// partial implementation of CESR decode function
// handles codes 'D' and '1AAA' -> sufficient to decode either key type
export const decodeKey = (key: Key): string => {
  const bytes = base64UrlToUint8Array(key);
  if (isValidEd25519Cesr(key)) return uint8ArrayToBase64URL(bytes.subarray(1)); // remove the first byte, which is the code "D"
  if (isValidSecp256k1Cesr(key))
    return uint8ArrayToBase64URL(bytes.subarray(4)); // remove the first 4 bytes, which is the code "1AAA"
  throw new Error('Invalid key');
};
