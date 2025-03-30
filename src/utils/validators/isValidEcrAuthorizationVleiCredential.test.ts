import { isValidEcrAuthorizationVleiCredential } from './isValidEcrAuthorizationVleiCredential.js';
import ecrAuthorizationVleiCredential from '../../../test/data/creds/ecrAuthorizationVleiCredential.js';

describe('isValidEcrAuthorizationVleiCredential', () => {
  it('should detect valid ECR authorization credential by LE to QVi', () => {
    expect(
      isValidEcrAuthorizationVleiCredential(ecrAuthorizationVleiCredential)
    ).toBe(true);
  });
  it('should detect invalid ECR authorization credential', () => {
    expect(
      isValidEcrAuthorizationVleiCredential({
        ...ecrAuthorizationVleiCredential,
        invalid: 'invalid',
      })
    ).toBe(false);
  });
});
