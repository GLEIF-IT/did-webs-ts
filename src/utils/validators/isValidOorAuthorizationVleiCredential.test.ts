import { isValidOorAuthorizationVleiCredential } from './isValidOorAuthorizationVleiCredential.js';
import oorAuthorizationVleiCredential from '../../../test/data/creds/oorAuthorizationVleiCredential.js';

describe('oorAuthorizationVleiCredential', () => {
  it('should detect valid OOR authorization credential by LE to QVi', () => {
    expect(
      isValidOorAuthorizationVleiCredential(oorAuthorizationVleiCredential)
    ).toBe(true);
  });
  it('should detect invalid OOR authorization credential', () => {
    expect(
      isValidOorAuthorizationVleiCredential({
        ...oorAuthorizationVleiCredential,
        invalid: 'invalid',
      })
    ).toBe(false);
  });
});
