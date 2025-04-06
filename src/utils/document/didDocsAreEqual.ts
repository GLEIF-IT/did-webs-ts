import { stringify } from 'safe-stable-stringify';

export const didDocsAreEqual = (doc1: object, doc2: object): boolean => {
  const string1 = stringify(doc1);
  const string2 = stringify(doc2);
  return string1 === string2;
};
