import { Aid, createAid } from './Aid.js';
import { KeyState, createKeyState } from './KeyState.js';

export interface IdentifierAndKeyState {
  identifier: Aid;
  keyState: KeyState;
}

export const createIdentifierAndKeys = (
  identifier: string,
  keyState: { kt: string | string[]; k: string[] }
): IdentifierAndKeyState =>
  ({
    identifier: createAid(identifier) as Aid,
    keyState: createKeyState(keyState.kt, keyState.k),
  }) as IdentifierAndKeyState;
