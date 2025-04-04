import * as R from 'remeda';

import { IdentifierAndKeys } from '../IdentifierAndKeys.js';
import { Did } from '../Did.js';
import { Key } from '../Key.js';
import { Aid } from '../Aid.js';

import { decodeKey } from '../../utils/decodeKey.js';
import { computeXAndYForSecp256k1 } from '../../utils/computeXAndYForSecp256k1.js';
import { lcm } from '../../utils/lcm.js';

export const generateDocument = (
  controllerDid: Did,
  controller: IdentifierAndKeys,
  delegatorDid?: Did,
  delegator?: IdentifierAndKeys
): object => {
  // make sure both delegate paramers are provided or none
  const hasDelegator = checkDelegator(delegatorDid, delegator);

  // pregenerate various helpful values and objects
  const controllerThresholdIsFractional = Array.isArray(controller.kt);
  const controllerThreshold = calcutaleThreshold(controller.kt);

  const conditionalProofVerificationMethod = {
    ...idTypeControllerBlock(
      controller.identifier as Aid,
      'ConditionalProof2022',
      controllerDid
    ),
    threshold: controllerThreshold,
    ...conditionalProofBlock(controller, controllerThresholdIsFractional),
  };

  const keyVerificationMethods = controller.keys.map((key) =>
    keyBlock(controllerDid, key)
  );

  const capabilityDelegation = hasDelegator
    ? capabilityDelegationBlock(
        delegator as IdentifierAndKeys,
        delegatorDid as Did
      )
    : {};
  // use pregenerated values to create the document
  return {
    id: controllerDid,
    // if threshold is 2 or more, there must be a conditional proof verification method
    verificationMethod:
      controllerThreshold > 1
        ? [conditionalProofVerificationMethod, ...keyVerificationMethods]
        : keyVerificationMethods,
    // if threshold is 1, then the controller authenticates and asserts with their key
    // if threshold is 2 or more, or if it's an array of fractions, then the controller authenticates and asserts with the conditional proof
    authentication: [
      controllerThreshold > 1
        ? `#${controller.identifier}`
        : `#${controller.keys[0]}`,
    ],
    assertionMethod: [
      controllerThreshold > 1
        ? `#${controller.identifier}`
        : `#${controller.keys[0]}`,
    ],
    ...capabilityDelegation,
    service: [],
    alsoKnownAs: [didWeb(controllerDid), didKeri(controllerDid)],
  };
};

const checkDelegator = (
  delegatorDid: Did | undefined,
  delegator: IdentifierAndKeys | undefined
): boolean => {
  if (delegatorDid && !delegator) {
    throw new Error('Delegator did provided without delegator keys');
  }
  if (delegator && !delegatorDid) {
    throw new Error('Delegator keys provided without delegator did');
  }
  return delegatorDid !== undefined && delegator !== undefined;
};

const idTypeControllerBlock = (
  identifier: Aid | Key,
  type: 'ConditionalProof2022' | 'JsonWebKey2020',
  controller: Did
): { id: Aid; type: string; controller: Did } => ({
  id: `#${identifier}` as Aid,
  type,
  controller,
});

const conditionalProofBlock = (
  controller: IdentifierAndKeys,
  isFracional: boolean
) => {
  if (isFracional) {
    const weights = calculateWeights(controller.kt as string[]);
    return {
      // for each key, there should be a corresponding weight, print them as specified
      conditionWeightedThreshold: controller.keys.map((key, index) => {
        return {
          condition: `#${key}`,
          weight: weights[index],
        };
      }),
    };
  } else {
    return {
      conditionThreshold: controller.keys.map((key) => `#${key}`),
    };
  }
};

const keyBlock = (controllerDid: Did, key: Key) => ({
  ...idTypeControllerBlock(key as Key, 'JsonWebKey2020', controllerDid),
  publicKeyJwk: {
    kid: key,
    kty: key.startsWith('1AAA') ? 'EC' : 'OKP',
    crv: key.startsWith('1AAA') ? 'secp256k1' : 'Ed25519',
    ...(key.startsWith('1AAA')
      ? computeXAndYForSecp256k1(decodeKey(key))
      : { x: decodeKey(key) }),
  },
});

// calculate the threshold for the conditional proof
const calcutaleThreshold = (kt: string | string[]): number =>
  Array.isArray(kt)
    ? R.pipe(
        kt,
        R.map(extractDenominator),
        R.reduce(findLowestCommonMultiple, 1),
        divideByTwo
      )
    : parseInt(kt);

// returns an array of calulated weights for each fraction
const calculateWeights = (fractions: string[]): number[] =>
  R.pipe(
    fractions,
    R.map(extractDenominator),
    R.reduce(findLowestCommonMultiple, 1),
    (lcd) => fractions.map(expandFraction(lcd))
  );

const capabilityDelegationBlock = (delegator: IdentifierAndKeys, did: Did) => ({
  capabilityDelegation:
    delegator.keys.length > 1
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
          ...delegator.keys.map((key) => keyBlock(did, key)),
        ]
      : delegator.keys.map((key) => keyBlock(did, key)),
});

const didWeb = (did: Did): string =>
  did.replace(/^did:webs:(.+)$/, 'did:web:$1');

const didKeri = (did: Did): string =>
  did.replace(/^did:webs:(?:[^:]+:)*([^:]+)$/, 'did:keri:$1');

const extractDenominator = (fraction: string): number => {
  const parts = fraction.split('/');
  return Number(parts[1]);
};

const expandFraction = (
  lcd: number
): ((value: string, index: number, array: string[]) => number) => {
  return (fraction) => {
    const [numStr, denomStr] = fraction.split('/');
    const numerator = Number(numStr);
    const denominator = Number(denomStr);
    return numerator * (lcd / denominator);
  };
};

const divideByTwo = (num: number): number => num / 2;

const findLowestCommonMultiple = (a: number, b: number): number => lcm(a, b);
