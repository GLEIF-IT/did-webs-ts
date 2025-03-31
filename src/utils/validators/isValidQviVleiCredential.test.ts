import { isValidQviVleiCredential } from './isValidQviVleiCredential.js';
import qviVleiCredential from '../../../test/data/creds/qviVleiCredential.js';

describe('isValidQviCred', () => {
  it('should detect valid QVI credential', () => {
    expect(isValidQviVleiCredential(qviVleiCredential)).toBe(true);
  });
  it('should detect invalid QVI credential', () => {
    expect(
      isValidQviVleiCredential({ ...qviVleiCredential, invalid: 'invalid' })
    ).toBe(false);
  });
});
