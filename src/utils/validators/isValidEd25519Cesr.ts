export const isValidEd25519Cesr = (key: string): boolean =>
  new RegExp(/^D[a-zA-Z0-9_-]{43}$/).test(key);
