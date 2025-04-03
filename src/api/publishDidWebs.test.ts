import { IdentifierAndKeys } from '../core/IdentifierAndKeys.js';
import { publishDidWebs } from './publishDidWebs.js';

describe('publishDidWebs', () => {
  it('should publish a single-sig, non-delegation DID document', () => {
    const controller = {
      identifier: 'EdefghijklmnopqrstuvwxyzABCDE1234567890_-abc',
      keys: ['DdefghijklmnopqrstuvwxyzABCDE1234567890_-abc'],
      kt: '1',
    } as IdentifierAndKeys;
    expect(publishDidWebs(controller)).toBe(true);
  });
});
