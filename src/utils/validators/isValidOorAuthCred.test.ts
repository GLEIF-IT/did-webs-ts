import { isValidOorAuthCred } from './isValidOorAuthCred.js';
import oorAuthCred from '../../../test/data/creds/oorAuthCred.js';

describe('isValidOorAuthCred', () => {
  it('should detect valid OOR authorization credential by LE to QVi', () => {
    expect(isValidOorAuthCred(oorAuthCred)).toBe(true);
  });
  it('should detect invalid OOR authorization credential', () => {
    expect(isValidOorAuthCred({ ...oorAuthCred, invalid: 'invalid' })).toBe(
      false
    );
  });
});
