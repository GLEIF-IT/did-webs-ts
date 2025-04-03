import * as secp from '@noble/secp256k1';

import { base64UrlToBytes } from './base64UrlToBytes.js';
import { bytesToBase64Url } from './bytesToBase64Url.js';

export const computeXAndYForSecp256k1 = (compressedKey: string) => {
  const bytes = base64UrlToBytes(compressedKey);
  const hexKey = secp.etc.bytesToHex(bytes);
  const point = secp.ProjectivePoint.fromHex(hexKey); // Decompresses the point internally
  const rawX = secp.etc.numberToBytesBE(point.x);
  const rawY = secp.etc.numberToBytesBE(point.y);
  return {
    x: bytesToBase64Url(rawX),
    y: bytesToBase64Url(rawY),
  };
};
