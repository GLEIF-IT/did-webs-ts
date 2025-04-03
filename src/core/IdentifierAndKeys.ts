import { Aid } from './Aid.js';
import { Key } from './Key.js';

export interface IdentifierAndKeys {
  identifier: Aid;
  keys: Key[];
  kt: string | string[]; // the key threshold, could be an integer or an array of fractions
}
