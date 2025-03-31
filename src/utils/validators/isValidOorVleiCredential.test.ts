import { isValidOorVleiCredential } from './isValidOorVleiCredential.js';
import oorVleiCredential from '../../../test/data/creds/oorVleiCredential.js';

describe('isValidOorVleiCredential', () => {
  it('should detect valid OOR credential issued by LE', () => {
    expect(isValidOorVleiCredential(oorVleiCredential)).toBe(true);
  });
  it('should detect invalid OOR credential', () => {
    expect(
      isValidOorVleiCredential({ ...oorVleiCredential, invalid: 'invalid' })
    ).toBe(false);
  });
});
