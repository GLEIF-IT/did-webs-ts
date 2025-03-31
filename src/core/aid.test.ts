import { Aid, createAid } from './aid.js';

describe('createAid', () => {
  it('should validate a string as an Aid', () => {
    const aid = createAid('EdefghijklmnopqrstuvwxyzABCDE1234567890_-abc');
    expect(aid).toBe('EdefghijklmnopqrstuvwxyzABCDE1234567890_-abc' as Aid);
  });
  it('should throw an error for invalid Aid', () => {
    expect(() => createAid('invalid_key')).toThrow('Invalid key format');
  });
});
