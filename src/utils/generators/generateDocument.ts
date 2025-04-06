import { IdentifierAndKeyState } from '../../core/IdentifierAndKeys.js';
import { Did } from '../../core/Did.js';
import { Aid } from '../../core/Aid.js';
import { KeyState } from '../../core/KeyState.js';

import { generateCapabilityDelegationBlock } from './generateCapabilityDelegationBlock.js';
import { generateConditionalProofBlock } from './generateConditionalProofBlock.js';
import { generateKeyVerificationBlock } from './generateKeyVerificationBlock.js';
import { calculateThreshold } from '../document/calculateThreshold.js';
import { generateDidWeb } from './generateDidWeb.js';
import { generateDidKeri } from './generateDidKeri.js';

export const generateDocument = (
  controllerDid: Did,
  controller: IdentifierAndKeyState,
  delegatorDid?: Did,
  delegator?: IdentifierAndKeyState
): object => {
  // make sure both delegate paramers are provided or none
  if (delegatorDid && !delegator) {
    throw new Error('Delegator did provided without delegator keys');
  }
  if (delegator && !delegatorDid) {
    throw new Error('Delegator keys provided without delegator did');
  }

  // various helpful values and objects
  const controllerIdentifier = controller.identifier as Aid;
  const controllerKeyState = controller.keyState as KeyState;
  const controllerThreshold = calculateThreshold(controllerKeyState.kt);
  // const delagatorKeyState = hasDelegator ? delegator?.keyState : undefined;
  // const delegatorThresholdIsFractional = hasDelegator
  // ? isFractionalThreshold(delagatorKeyState?.kt)
  // : undefined;
  // const delegatorThreshold = hasDelegator
  //   ? calcutaleThreshold(delagatorKeyState?.kt)
  //   : undefined;
  // some pregenerated blocks
  const conditionalProofBlock = generateConditionalProofBlock(
    controller,
    controllerDid
  );

  const keyVerificationBlock = generateKeyVerificationBlock(
    controller,
    controllerDid
  );

  const optionalCapabilityDelegationBlock = generateCapabilityDelegationBlock(
    delegator,
    delegatorDid
  );

  // use pregenerated values to create the document
  return {
    id: controllerDid,
    verificationMethod:
      controllerThreshold > 1
        ? [conditionalProofBlock, ...keyVerificationBlock]
        : keyVerificationBlock,
    authentication: [
      controllerThreshold > 1
        ? `#${controllerIdentifier}`
        : `#${controllerKeyState.k[0]}`,
    ],
    assertionMethod: [
      controllerThreshold > 1
        ? `#${controllerIdentifier}`
        : `#${controllerKeyState.k[0]}`,
    ],
    ...optionalCapabilityDelegationBlock,
    service: [],
    alsoKnownAs: [
      generateDidWeb(controllerDid),
      generateDidKeri(controllerDid),
    ],
  };
};
