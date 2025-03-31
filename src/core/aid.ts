// Aid can't be any old string, it must come from the 'ctor' function
export type Aid = string & { readonly __brand: unique symbol };

// Runtime validator
export const createAid = (aid: string): Aid => {
  const regex = /^E[a-zA-Z0-9_-]{43}$/;
  if (!regex.test(aid)) {
    throw new Error('Invalid key format');
  }
  return aid as Aid;
};
