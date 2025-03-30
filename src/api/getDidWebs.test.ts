import { getDidWebs } from './getDidWebs.js';
import qviVleiCredential from '../../test/data/creds/qviVleiCredential.js';
import leVleiCredential from '../../test/data/creds/leVleiCredential.js';

describe('getDidWebs', () => {
  it('should return the correct value', () => {
    expect(getDidWebs('example.com', JSON.stringify(qviVleiCredential))).toBe(
      'did:webs:example.com:Ei5csblWpTy22uVkbZrZxvSUORxPvIlrfpq2e1hKTtfA'
    );
  });
  it('should return the correct value again', () => {
    expect(getDidWebs('example.com', JSON.stringify(leVleiCredential))).toBe(
      'did:webs:example.com:EmkPreYpZfFk66jpf3uFv7vklXKhzBrAqjsKAn2EDIPM'
    );
  });
});
