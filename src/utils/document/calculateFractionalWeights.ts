import * as R from 'remeda';
import { expandFraction } from '../math/expandFraction.js';
import { extractDenominator } from '../math/extractDenominator.js';
import { findLowestCommonMultiple } from '../math/findLowestCommonMultiple.js';

// currently being tested in the generateDocument function

// returns an array of calulated weights for each fraction
export const calculateFractionalWeights = (fractions: string[]): number[] =>
  R.pipe(
    fractions,
    R.map(extractDenominator),
    R.reduce(findLowestCommonMultiple, 1),
    (lcd) => fractions.map(expandFraction(lcd))
  );
