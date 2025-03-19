export const isValidAid = (input: string): boolean => isValidAID(input);

const isValidAID = (aid: string): boolean =>
  aid.startsWith('E') && aid.length === 44 && /^[A-Za-z0-9_-]+$/.test(aid);
