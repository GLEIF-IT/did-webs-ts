import { Did } from '../../core/Did.js';
import { IdentifierAndKeyState } from '../../core/IdentifierAndKeys.js';
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
          {
            id: '#ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
            type: 'ConditionalProof2022',
            controller:
              'did:webs:example.com%3A8080:path:to:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
            threshold: 2,
            conditionThreshold: [
              '#DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
              '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
              '#DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
            ],
          },
          ...delegator.keyState.k.map((key) => generateKeyBlock(did, key)),
        ]
      : delegator.keyState.k.map((key) => generateKeyBlock(did, key)),
});
