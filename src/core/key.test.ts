import { Key, createKey } from './key.js';

describe('createKey', () => {
  it('should validate a string as an Key', () => {
    const key = createKey('DdefghijklmnopqrstuvwxyzABCDE1234567890_-abc');
    expect(key).toBe('DdefghijklmnopqrstuvwxyzABCDE1234567890_-abc' as Key);
  });
  it('should throw an error for invalid Key', () => {
    expect(() => createKey('invalid_key')).toThrow('Invalid key format');
  });
});
