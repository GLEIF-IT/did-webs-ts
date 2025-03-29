import { isValidLeEcrAuthCred } from './isValidLeEcrAuthCred.js';
import leEcrAuthCred from '../../../test/data/creds/leEcrAuthCred.js';

describe('isValidLeEcrAuthCred', () => {
  it('should detect valid ECR authorization credential by LE to QVi', () => {
    expect(isValidLeEcrAuthCred(leEcrAuthCred)).toBe(true);
  });
  it('should detect invalid ECR authorization credential', () => {
    expect(isValidLeEcrAuthCred({ ...leEcrAuthCred, invalid: 'invalid' })).toBe(
      false
    );
  });
});
