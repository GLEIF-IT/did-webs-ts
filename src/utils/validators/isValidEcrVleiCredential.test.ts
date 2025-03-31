import { isValidEcrVleiCredential } from './isValidEcrVleiCredential.js';
import ecrLeVleiCredential from '../../../test/data/creds/ecrLeVleiCredential.js';

describe('isValidEcrVleiCredential', () => {
  it('should detect valid ECR credential issued by LE', () => {
    expect(isValidEcrVleiCredential(ecrLeVleiCredential)).toBe(true);
  });
  it('should detect invalid ECR credential', () => {
    expect(
      isValidEcrVleiCredential({ ...ecrLeVleiCredential, invalid: 'invalid' })
    ).toBe(false);
  });
});
