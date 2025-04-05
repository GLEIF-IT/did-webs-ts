import { createKeyState } from './KeyState.js';
import { Key } from './Key.js';
import { Threshold } from './Threshold.js';

describe('KeyState', () => {
  const key1 = 'DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6';
  const key2 = 'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE';
  const key3 = 'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu';

  describe('createKeyState()', () => {
    it('should create a KeyState with a numeric threshold and a single key', () => {
      const keyState = createKeyState('1', [key1]);
      expect(keyState.kt).toBe('1' as Threshold);
      expect(keyState.k).toEqual([key1] as Key[]);
    });

    it('should create a KeyState with numeric threshold and multiple keys', () => {
      const keyState = createKeyState('2', [key1, key2]);
      expect(keyState.kt).toBe('2' as Threshold);
      expect(keyState.k).toEqual([key1, key2] as Key[]);
    });

    it('should create a KeyState with a fractional threshold and a multiple keys', () => {
      const keyState = createKeyState(
        ['1/2', '1/3', '1/4'],
        [key1, key2, key3]
      );
      expect(keyState.kt).toEqual(['1/2', '1/3', '1/4'] as Threshold);
      expect(keyState.k).toEqual([key1, key2, key3] as Key[]);
    });

    it('should throw an error for invalid threshold input', () => {
      expect(() => createKeyState('invalid', ['a'])).toThrow();
    });

    it('should throw an error for invalid key input', () => {
      expect(() => createKeyState('2', [123])).toThrow();
    });
  });
});
