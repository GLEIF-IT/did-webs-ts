export const base64UrlToBytes = (b64url: string): Uint8Array => {
  const base64 = b64url.replace(/-/g, '+').replace(/_/g, '/');
  const binaryStr = atob(base64);
  return new Uint8Array([...binaryStr].map((char) => char.charCodeAt(0)));
};
