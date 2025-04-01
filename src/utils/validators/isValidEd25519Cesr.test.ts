import { isValidEd25519Cesr } from './isValidEd25519Cesr.js';

describe('isValidEd25519Cesr', () => {
  it('should return true for a valid Ed25519 Cesr key', () => {
    const key = 'D9_VhQj6a1p-K0zB2uY3wRs4xTe8gF5C7dNqLrZvSjDx';
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
    const key = 'D9_VhQj6a1p-K0zB2uY3wRs4xTe8gF5C7dNqLrZvSjD';
    expect(isValidEd25519Cesr(key)).toBe(false);
    // too long
    const key2 = 'D9_VhQj6a1p-K0zB2uY3wRs4xTe8gF5C7dNqLrZvSjDxD';
    expect(isValidEd25519Cesr(key2)).toBe(false);
  });
  it('should return false for a value with the wrong prefix', () => {
    const key = 'X9_VhQj6a1p-K0zB2uY3wRs4xTe8gF5C7dNqLrZvSjDx';
    expect(isValidEd25519Cesr(key)).toBe(false);
  }
  );
});