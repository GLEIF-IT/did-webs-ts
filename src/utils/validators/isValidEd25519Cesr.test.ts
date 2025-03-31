import { isValidEd25519Cesr } from './isValidEd25519Cesr.js';

describe('isValidEd25519Cesr', () => {
  it('should return true for a valid Ed25519 Cesr key', () => {
    const key = 'Dabcdefghijklmnoqrstuvwxyz123456789012345678';
    expect(isValidEd25519Cesr(key)).toBe(true);
  });

  it('should return false for an invalid Ed25519 Cesr key', () => {
    const key = 'invalidKey1234567890123456789012345678901234567890';
    expect(isValidEd25519Cesr(key)).toBe(false);
  });
  it('should return false for an empty string', () => {
    const key = '';
    expect(isValidEd25519Cesr(key)).toBe(false);
  });
  it('should return false for a key that is wrong length', () => {
    // too short
    const key = 'Dabcdefghijklmnoqrstuvwxyz1234567890123456789';
    expect(isValidEd25519Cesr(key)).toBe(false);
    // too long
    const key2 = 'Dabcdefghijklmnoqrstuvwxyz1234567890123456789012345678901234567890';
    expect(isValidEd25519Cesr(key2)).toBe(false);
  });
  it('should return false for a value with the wrong prefix', () => {
    const key = 'abcdefghijklmnoqrstuvwxyz1234567890123456789';
    expect(isValidEd25519Cesr(key)).toBe(false);
  }
  );
});