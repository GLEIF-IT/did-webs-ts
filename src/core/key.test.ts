import { Key, createKey } from './key.js';

describe('createKey', () => {
  it('should validate a string as an Ed25519 Key', () => {
    const key = createKey('DdefghijklmnopqrstuvwxyzABCDE1234567890_-abc');
    expect(key).toBe('DdefghijklmnopqrstuvwxyzABCDE1234567890_-abc' as Key);
  });
  it('should validate a string as an secp256k1 Key', () => {
    const key = createKey('1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk');
    expect(key).toBe('1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk' as Key);
  });
  it('should throw an error for invalid Key', () => {
    expect(() => createKey('invalid_key')).toThrow('Invalid key format');
  });
});
