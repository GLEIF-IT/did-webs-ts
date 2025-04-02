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
  console.log(`comparing this: ${value1}`);
  console.log(`to that:        ${value2}`);
  return value1 === value2;
};
