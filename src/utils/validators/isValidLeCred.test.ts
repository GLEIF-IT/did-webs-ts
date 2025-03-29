import { isValidLeCred } from './isValidLeCred';
import leCred from '../../../test/data/creds/leCred.js';

describe('isValidLeCred', () => {
  it('should detect valid LE credential', () => {
    expect(isValidLeCred(leCred)).toBe(true);
  });
  it('should detect invalid LE credential', () => {
    expect(isValidLeCred({ ...leCred, invalid: 'invalid' })).toBe(false);
  });
});
