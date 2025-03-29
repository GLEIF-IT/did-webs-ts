import { isValidQviCred } from './isValidQviCred.js';
import qviCred from '../../../test/data/creds/qviCred.js';

describe('isValidQviCred', () => {
  it('should detect valid QVI credential', () => {
    expect(isValidQviCred(qviCred)).toBe(true);
  });
  it('should detect invalid QVI credential', () => {
    expect(isValidQviCred({ ...qviCred, invalid: 'invalid' })).toBe(false);
  });
});
