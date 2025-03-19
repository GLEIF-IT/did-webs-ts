import { isValidHost } from './isValidHost.js';

describe('isValidHost', () => {
  it('should recognize valid host names', () => {
    expect(isValidHost('example.com')).toBe(true);
  });
  it('should reject invalid host names', () => {
    expect(isValidHost('example')).toBe(false);
  });
});
