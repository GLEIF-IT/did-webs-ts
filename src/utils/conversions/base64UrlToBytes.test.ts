import { base64UrlToBytes } from './base64UrlToBytes';
import { bytesToBase64Url } from './bytesToBase64Url';

describe('base64UrlToBytes', () => {
  it('should do a round trip', () => {
    const verificationKey = 'By1XyJ2pG8a3M2KdQW6h9ZV4Ot_NlbB8Cj7X-s4IRpcd';
    const bytes = base64UrlToBytes(verificationKey);
    const base64url = bytesToBase64Url(bytes);
    expect(verificationKey).toEqual(base64url);
  });
});
