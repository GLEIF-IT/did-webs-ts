import { getDidWebs } from './getDidWebs.js';
import qviVleiCredential from '../../test/data/creds/qviVleiCredential.js';
import leVleiCredential from '../../test/data/creds/leVleiCredential.js';
import oorAuthorizationVleiCredential from '../../test/data/creds/oorAuthorizationVleiCredential.js';
import ecrAuthorizationVleiCredential from '../../test/data/creds/ecrAuthorizationVleiCredential.js';
import oorVleiCredential from '../../test/data/creds/oorVleiCredential.js';
import ecrLeVleiCredential from '../../test/data/creds/ecrLeVleiCredential.js';
import ecrQviVleiCredential from '../../test/data/creds/ecrQviVleiCredential.js';

describe('getDidWebs', () => {
  it('should return the correct value for QVI vLEI Credential', () => {
    expect(getDidWebs('example.com', qviVleiCredential)).toBe(
      'did:webs:example.com:Ei5csblWpTy22uVkbZrZxvSUORxPvIlrfpq2e1hKTtfA'
    );
  });
  it('should return the correct value for LE vLEI Credential', () => {
    expect(getDidWebs('example.com', leVleiCredential)).toBe(
      'did:webs:example.com:EmkPreYpZfFk66jpf3uFv7vklXKhzBrAqjsKAn2EDIPM'
    );
  });
  it('should return the correct value for OOR Authorization vLEI Credential', () => {
    expect(getDidWebs('example.com', oorAuthorizationVleiCredential)).toBe(
      'did:webs:example.com:EKXPX7hWw8KK5Y_Mxs2TOuCrGdN45vPIZ78NofRlVBws'
    );
  });
  it('should return the correct value for ECR Authorization vLEI Credential', () => {
    expect(getDidWebs('example.com', ecrAuthorizationVleiCredential)).toBe(
      'did:webs:example.com:EmSIYYxvgtKn9jAp8GcK3fXOwTeyBIcAnRnyrLNfKjVI'
    );
  });
  it('should return the correct value for OOR vLEI Credential', () => {
    expect(getDidWebs('example.com', oorVleiCredential)).toBe(
      'did:webs:example.com:EZBfSGG5k1CZYk1QH3GXFPtEwLHf0H06zuDUEJRyar1E'
    );
  });
  it('should return the correct value for ECR vLEI Credential issued by LE', () => {
    expect(getDidWebs('example.com', ecrLeVleiCredential)).toBe(
      'did:webs:example.com:EmSIYYxvgtKn9jAp8GcK3fXOwTeyBIcAnRnyrLNfKjVI'
    );
  });
  it('should return the correct value for ECR vLEI Credential issued by QVI', () => {
    expect(getDidWebs('example.com', ecrQviVleiCredential)).toBe(
      'did:webs:example.com:EKXPX7hWw8KK5Y_Mxs2TOuCrGdN45vPIZ78NofRlVBws'
    );
  });
});
