import { Key, createKey } from './Key.js';
import { Threshold, createThreshold } from './Threshold.js';

export interface KeyState {
  kt: Threshold;
  k: Key[];
}

export const createKeyState = (
  kt: string | string[],
  k: string[]
): KeyState => {
  const threshold = createThreshold(kt);
  const keys = k.map((key) => createKey(key));
  return { kt: threshold, k: keys } as KeyState;
};
