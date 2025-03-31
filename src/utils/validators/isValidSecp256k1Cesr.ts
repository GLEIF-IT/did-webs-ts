export const isValidSecp256k1Cesr = (key: string): boolean =>
  new RegExp(/^1AAA[A-Za-z0-9_-]{44}$/).test(key);
