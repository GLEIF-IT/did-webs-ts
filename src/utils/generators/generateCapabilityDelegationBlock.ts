import { Did } from '../../core/Did.js';
import { IdentifierAndKeyState } from '../../core/IdentifierAndKeys.js';
import { generateConditionalProofBlock } from './generateConditionalProofBlock.js';
import { generateKeyBlock } from './generateKeyBlock.js';

const hasDelegator = (
  delegator: IdentifierAndKeyState | undefined,
  delegatorDid: Did | undefined
) => delegator !== undefined && delegatorDid !== undefined;

// currently this all gets tested in the generateDocument function
export const generateCapabilityDelegationBlock = (
  delegator: IdentifierAndKeyState | undefined,
  delegatorDid: Did | undefined
) =>
  hasDelegator(delegator, delegatorDid)
    ? capabilityDelegationBlock(
        delegator as IdentifierAndKeyState,
        delegatorDid as Did
      )
    : {};

const capabilityDelegationBlock = (
  delegator: IdentifierAndKeyState,
  did: Did
) => ({
  capabilityDelegation:
    delegator.keyState.k.length > 1
      ? [
          generateConditionalProofBlock(delegator, did),
          ...delegator.keyState.k.map((key) => generateKeyBlock(did, key)),
        ]
      : delegator.keyState.k.map((key) => generateKeyBlock(did, key)),
});
