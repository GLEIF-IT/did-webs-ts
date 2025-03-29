import { isValidLeEcrLeCred } from './isValidLeEcrLeCred.js';
import leEcrLeCred from '../../../test/data/creds/leEcrLeCred.js';

describe('isValidLeEcrLeCred', () => {
  it('should detect valid ECR credential issued by LE', () => {
    expect(isValidLeEcrLeCred(leEcrLeCred)).toBe(true);
  });
  it('should detect invalid ECR credential', () => {
    expect(isValidLeEcrLeCred({ ...leEcrLeCred, invalid: 'invalid' })).toBe(
      false
    );
  });
});
