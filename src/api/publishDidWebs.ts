import { IdentifierAndKeyState } from '../core/IdentifierAndKeys.js';

export const publishDidWebs = (
  controller: IdentifierAndKeyState,
  delagator?: IdentifierAndKeyState
): boolean => typeof controller === 'object' && delagator === undefined;
