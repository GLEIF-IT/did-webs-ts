import {
  Threshold,
  isNumericThreshold,
  isFractionalThreshold,
  createThreshold,
} from './Threshold.js';

describe('Threshold', () => {
  describe('isNumericThreshold', () => {
    it('should return true for numeric threshold', () => {
      expect(isNumericThreshold('3')).toBe(true);
      expect(isNumericThreshold('1')).toBe(true);
    });

    it('should return false for non-numeric threshold', () => {
      expect(isNumericThreshold(['1/2', '1/3'])).toBe(false);
      expect(isNumericThreshold(['1/2'])).toBe(false);
    });
  });

  describe('isFractionalThreshold', () => {
    it('should return true for fractional threshold', () => {
      expect(isFractionalThreshold(['1/2', '1/3'])).toBe(true);
      expect(isFractionalThreshold(['1/2'])).toBe(true);
    });

    it('should return false for non-fractional threshold', () => {
      expect(isFractionalThreshold('3')).toBe(false);
      expect(isFractionalThreshold('1')).toBe(false);
    });
  });

  describe('createThreshold', () => {
    it('should create a numeric threshold', () => {
      const threshold = createThreshold('3') as Threshold;
      expect(threshold).toEqual('3');
    });

    it('should create a fractional threshold', () => {
      const threshold = createThreshold(['1/2', '1/3']) as Threshold;
      expect(threshold).toEqual(['1/2', '1/3']);
    });

    it('should throw an error for invalid threshold format', () => {
      expect(() => createThreshold(123)).toThrowError(
        'Invalid threshold format'
      );
    });
  });
});
