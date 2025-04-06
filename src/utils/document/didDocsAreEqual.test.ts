import { didDocsAreEqual } from './didDocsAreEqual.js';
import imposterDoc from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-fake-ECwJ.js';
import docInAltFormat from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-alt-ECwJ.js';
import copyOfDoc from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-copy-ECwJ.js';
import doc from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-ECwJ.js';

describe('didDocsAreEqual', () => {
  it('should return true for identical DID documents', () => {
    expect(didDocsAreEqual(doc, copyOfDoc)).toBe(true);
  });
  it('should return true for different field order', () => {
    expect(didDocsAreEqual(doc, docInAltFormat)).toBe(true);
  });
  it('should return false for different DID documents', () => {
    expect(didDocsAreEqual(doc, imposterDoc)).toBe(false);
  });
});
