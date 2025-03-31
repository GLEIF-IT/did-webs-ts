import { isValidLeVleiCredential } from './isValidLeVleiCredential.js';
import leVleiCredential from '../../../test/data/creds/leVleiCredential.js';

describe('isValidLeVleiCredential', () => {
  it('should detect valid LE credential', () => {
    expect(isValidLeVleiCredential(leVleiCredential)).toBe(true);
  });
  it('should detect invalid LE credential', () => {
    expect(
      isValidLeVleiCredential({ ...leVleiCredential, invalid: 'invalid' })
    ).toBe(false);
  });
});
