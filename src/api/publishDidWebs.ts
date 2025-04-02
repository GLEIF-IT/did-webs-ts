import { IdentifierAndKeys } from '../core/IdentifierAndKeys.js';

export const publishDidWebs = (
  controller: IdentifierAndKeys,
  delagator?: IdentifierAndKeys
): boolean => typeof controller === 'object' && delagator === undefined;
