import { Buffer } from 'buffer/index.js';

const base64UrlToBuffer = (base64url: string): Buffer => {
  // convert everything into standard base64, including trailing padding in the form of '='
  const n = base64url.length % 4;
  const padded = base64url + '='.repeat(n > 0 ? 4 - n : n);
  const base64String = padded.replace(/-/g, '+').replace(/_/g, '/'); // swap out URL-safe characters for standard base64 characters
  return Buffer.from(base64String, 'base64');
};

const bufferToBase64URL = (buffer: Uint8Array): string =>
  Buffer.from(buffer)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+/, '');

// partial implementation of CESR decode function
// sufficient to decode the key
const decodeKey = (str: string): string => {
  const bytes = base64UrlToBuffer(str);
  const binary = bytes.subarray(1); // remove the first byte, which is the code "D"
  return bufferToBase64URL(binary);
};

export default decodeKey;
