import crypto from 'crypto';
import stringify from 'json-stable-stringify';

export const didDocsAreEqual = (doc1: object, doc2: object): boolean => {
  const value1 = crypto
    .createHash('sha256')
    .update(stringify(doc1) as string)
    .digest('hex');
  const value2 = crypto
    .createHash('sha256')
    .update(stringify(doc2) as string)
    .digest('hex');
  return value1 === value2;
};
