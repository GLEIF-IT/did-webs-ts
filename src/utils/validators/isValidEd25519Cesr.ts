export const isValidEd25519Cesr = (key: string): boolean =>
  /^D[a-zA-Z0-9_-]{43}$/.test(key);
