import { Did } from '../../core/Did.js';
import { IdentifierAndKeyState } from '../../core/IdentifierAndKeys.js';
import { Key } from '../../core/Key.js';
import { generateKeyBlock } from './generateKeyBlock.js';

// currently this all gets tested in the generateDocument function
export const generateKeyVerificationBlock = (
  controller: IdentifierAndKeyState,
  controllerDid: Did
) => {
  return controller.keyState.k.map((key) =>
    generateKeyBlock(controllerDid, key as Key)
  );
};
