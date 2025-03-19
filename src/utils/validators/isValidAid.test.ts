import { isValidAid } from './isValidAid.js';

describe('isValidAid', () => {
  it('should successfully validate well-formed AIDs', () => {
    expect(isValidAid('EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2')).toBe(
      true
    );
    expect(isValidAid('EFZiuJbg73lpE8WFD7bUBIJviAkdU4pSabMbX8DhlGT3')).toBe(
      true
    );
  });
});
