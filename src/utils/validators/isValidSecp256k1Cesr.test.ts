import { isValidSecp256k1Cesr } from './isValidSecp256k1Cesr.js';

describe('isValidSecp256k1Cesr', () => {
  it('should return true for a valid Secp256k1 Cesr key', () => {
    const key = '1AAAfQ7-z_3N9aC2Dp6oJ5rUvK0wYxTB8Hm1sI4eXlSgEoRz';
    expect(isValidSecp256k1Cesr(key)).toBe(true);
  });

  it('should return false for an invalid Secp256k1 Cesr key', () => {
    const key = 'invalidKey1234567890123456789012345678901234567890';
    expect(isValidSecp256k1Cesr(key)).toBe(false);
  });

  it('should return false for an empty string', () => {
    const key = '';
    expect(isValidSecp256k1Cesr(key)).toBe(false);
  });

  it('should return false for a key that is wrong length', () => {
    // too short
    const key = '1AAAfQ7-z_3N9aC2Dp6oJ5rUvK0wYxTB8Hm1sI4eXlSgEoR';
    expect(isValidSecp256k1Cesr(key)).toBe(false);
    // too long
    const key2 =
      '1AAAfQ7-z_3N9aC2Dp6oJ5rUvK0wYxTB8Hm1sI4eXlSgEoRzX';
    expect(isValidSecp256k1Cesr(key2)).toBe(false);
  });

  it('should return false for a value with the wrong prefix', () => {
    const key = '1BBBfQ7-z_3N9aC2Dp6oJ5rUvK0wYxTB8Hm1sI4eXlSgEoRz';
    expect(isValidSecp256k1Cesr(key)).toBe(false);
  });
});