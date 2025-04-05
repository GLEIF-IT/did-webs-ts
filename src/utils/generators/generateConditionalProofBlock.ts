import { Did } from '../../core/Did.js';
import { IdentifierAndKeyState } from '../../core/IdentifierAndKeys.js';
import { Key } from '../../core/Key.js';
import { KeyState } from '../../core/KeyState.js';
import { calculateFractionalWeights } from '../document/calculateFractionalWeights.js';
import { generateIdTypeControllerBlock } from './generateIdTypeControllerBlock.js';
import { isFractionalThreshold } from '../../core/Threshold.js';
import { calculateThreshold } from '../document/calculateThreshold.js';

// currently this all gets tested in the generateDocument function
export const generateConditionalProofBlock = (
  controller: IdentifierAndKeyState,
  controllerDid: Did
) => ({
  ...generateIdTypeControllerBlock(
    controller.identifier,
    'ConditionalProof2022',
    controllerDid
  ),
  threshold: calculateThreshold(controller.keyState.kt),
  ...conditionalProofBlock(controller.keyState),
});

const conditionalProofBlock = (controllerKeyState: KeyState) => {
  if (isFractionalThreshold(controllerKeyState.kt)) {
    const weights = calculateFractionalWeights(
      controllerKeyState.kt as string[]
    );
    return {
      // for each key, there should be a corresponding weight, print them as specified
      conditionWeightedThreshold: controllerKeyState.k.map((key, index) => {
        return {
          condition: `#${key}`,
          weight: weights[index],
        };
      }),
    };
  } else {
    return {
      conditionThreshold: controllerKeyState.k.map((key) => `#${key as Key}`),
    };
  }
};
