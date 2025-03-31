// Key can't be any old string, it must come from the 'ctor' function
export type Key = string & { readonly __brand: unique symbol };

// Runtime validator
export const createKey = (key: string): Key => {
  const regex = /^D[a-zA-Z0-9_-]{43}$/;
  if (!regex.test(key)) {
    throw new Error('Invalid key format');
  }
  return key as Key;
};
