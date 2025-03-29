import { isValidLeOorCred } from './isValidLeOorCred.js';
import leOorCred from '../../../test/data/creds/leOorCred.js';

describe('isValidLeOorCred', () => {
  it('should detect valid OOR credential issued by LE', () => {
    expect(isValidLeOorCred(leOorCred)).toBe(true);
  });
  it('should detect invalid OOR credential', () => {
    expect(isValidLeOorCred({ ...leOorCred, invalid: 'invalid' })).toBe(false);
  });
});
