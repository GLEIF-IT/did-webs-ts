export const expandFraction = (
  lcd: number
): ((value: string, index: number, array: string[]) => number) => {
  return (fraction) => {
    const [numStr, denomStr] = fraction.split('/');
    const numerator = Number(numStr);
    const denominator = Number(denomStr);
    return numerator * (lcd / denominator);
  };
};
