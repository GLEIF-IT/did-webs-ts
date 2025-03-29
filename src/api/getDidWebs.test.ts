import { getDidWebs } from './getDidWebs.js';
import { qviCred } from '../../test/data/creds/qviCred.js';
import { leCred } from '../../test/data/creds/leCred.js';

describe('getDidWebs', () => {
  it('should return the correct value', () => {
    expect(getDidWebs('example.com', JSON.stringify(qviCred))).toBe(
      'did:webs:example.com:Ei5csblWpTy22uVkbZrZxvSUORxPvIlrfpq2e1hKTtfA'
    );
  });
  it('should return the correct value again', () => {
    expect(getDidWebs('example.com', JSON.stringify(leCred))).toBe(
      'did:webs:example.com:EmkPreYpZfFk66jpf3uFv7vklXKhzBrAqjsKAn2EDIPM'
    );
  });
});
