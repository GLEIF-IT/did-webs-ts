import { Aid, createAid } from './Aid.js';

describe('createAid', () => {
  it('should validate a string as an Aid', () => {
    const aid = createAid('EdefghijklmnopqrstuvwxyzABCDE1234567890_-abc');
    expect(aid).toBe('EdefghijklmnopqrstuvwxyzABCDE1234567890_-abc' as Aid);
  });
  it('should throw an error for invalid Aid', () => {
    expect(() => createAid('invalid_aid')).toThrow('Invalid AID format');
  });
});
