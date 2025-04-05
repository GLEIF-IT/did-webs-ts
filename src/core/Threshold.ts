export type NumericThreshold = string;
export type FractionalThreshold = string[];

export type Threshold = NumericThreshold | FractionalThreshold;

const isValidThreshold = (threshold: Threshold): boolean => {
  if (isNumericThreshold(threshold)) {
    // Check if the string is a valid integer
    const num = parseInt(threshold, 10);
    return !isNaN(num) && num >= 1;
  } else if (isFractionalThreshold(threshold)) {
    // Check if the array is a valid fractional threshold
    return threshold.every((fraction) => {
      const parts = fraction.split('/');
      if (parts.length !== 2) return false;
      const numerator = parseInt(parts[0], 10);
      const denominator = parseInt(parts[1], 10);
      return !isNaN(numerator) && !isNaN(denominator) && denominator > 0;
    });
  }
  return false;
};

export const isNumericThreshold = (
  threshold: Threshold
): threshold is NumericThreshold => typeof threshold === 'string';

export const isFractionalThreshold = (
  threshold: Threshold
): threshold is FractionalThreshold => Array.isArray(threshold);

export const createThreshold = (threshold: string | string[]): Threshold =>
  isValidThreshold(threshold)
    ? threshold
    : (() => {
        throw new Error('Invalid threshold format');
      })();
