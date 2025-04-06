export const extractDenominator = (fraction: string): number => {
  const parts = fraction.split('/');
  return Number(parts[1]);
};
