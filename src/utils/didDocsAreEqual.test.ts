import { didDocsAreEqual } from './didDocsAreEqual.js';
import singleSignerNoDelegationImposter from '../../test/data/examples/didDocs/singleSignerNoDelegation/singleSignerNoDelegationImposter.js';
import singleSignerNoDelegationAlt from '../../test/data/examples/didDocs/singleSignerNoDelegation/singleSignerNoDelegationAlt.js';
import singleSignerNoDelegationCopy from '../../test/data/examples/didDocs/singleSignerNoDelegation/singleSignerNoDelegationCopy.js';
import singleSignerNoDelegation from '../../test/data/examples/didDocs/singleSignerNoDelegation/singleSignerNoDelegation.js';

describe('didDocsAreEqual', () => {
  it('should return true for identical DID documents', () => {
    expect(
      didDocsAreEqual(singleSignerNoDelegation, singleSignerNoDelegationCopy)
    ).toBe(true);
  });
  it('should return true for different field order', () => {
    expect(
      didDocsAreEqual(singleSignerNoDelegation, singleSignerNoDelegationAlt)
    ).toBe(true);
  });
  it('should return false for different DID documents', () => {
    expect(
      didDocsAreEqual(
        singleSignerNoDelegation,
        singleSignerNoDelegationImposter
      )
    ).toBe(false);
  });
});
