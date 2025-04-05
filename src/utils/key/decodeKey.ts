import * as R from 'remeda';

import { Key } from '../../core/Key.js';
import { isValidEd25519Cesr } from '../validators/isValidEd25519Cesr.js';
import { isValidSecp256k1Cesr } from '../validators/isValidSecp256k1Cesr.js';
import { base64UrlToBytes } from '../conversions/base64UrlToBytes.js';
import { bytesToBase64Url } from '../conversions/bytesToBase64Url.js';

const decodeWith = (code: string) => (rawBytes: Uint8Array) =>
  rawBytes.slice(code.length === 4 ? 0 : code.length);

const parseCode = (encoded: string): string =>
  encoded[0] === '1' ? encoded.slice(4) : encoded;

const decode = (code: string, encoded: string): Uint8Array =>
  R.pipe(encoded, parseCode, base64UrlToBytes, decodeWith(code));

export const decodeKey = (key: Key): string => {
  if (isValidEd25519Cesr(key)) return bytesToBase64Url(decode('D', key));
  if (isValidSecp256k1Cesr(key)) return bytesToBase64Url(decode('1AAA', key));
  throw new Error("Can't decode key");
};
