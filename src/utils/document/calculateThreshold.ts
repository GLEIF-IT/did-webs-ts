import * as R from 'remeda';
import { findLowestCommonMultiple } from '../math/findLowestCommonMultiple.js';
import { divideByTwo } from '../math/divideByTwo.js';
import { extractDenominator } from '../math/extractDenominator.js';

// currently being tested in the generateDocument function

// calculate the threshold for the conditional proof
export const calculateThreshold = (kt: string | string[]): number =>
  Array.isArray(kt)
    ? R.pipe(
        kt,
        R.map(extractDenominator),
        R.reduce(findLowestCommonMultiple, 1),
        divideByTwo
      )
    : (parseInt(kt) as number);
