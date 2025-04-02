import { generateDidDocument } from './generateDidDocument.js';
import { isValidDidCoreDocument } from '../utils/validators/isValidDidCoreDocument.js';
import { IdentifierAndKeys } from '../core/IdentifierAndKeys.js';
import { didDocsAreEqual } from '../utils/didDocsAreEqual.js';
import docECwJ from '../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-ECwJ.js';
import docEabc from '../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-Eabc.js';

describe('generateDidDocument', () => {
  it('should generate a valid DID document', () => {
    const controller = {
      identifier: 'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      keys: ['DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
    } as IdentifierAndKeys;
    const doc = generateDidDocument(controller);
    const result = isValidDidCoreDocument(doc);
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a given identifier and keys', () => {
    const controller = {
      identifier: 'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      keys: ['DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
    } as IdentifierAndKeys;
    const doc = generateDidDocument(controller);
    const result = didDocsAreEqual(doc, docECwJ);
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a different identifier and keys', () => {
    const controller = {
      identifier: 'EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123', // Different identifier
      keys: ['DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123'], // Different key
    } as IdentifierAndKeys;
    const doc = generateDidDocument(controller);
    const result = didDocsAreEqual(doc, docEabc);
    expect(result).toBe(true);
  });
});
