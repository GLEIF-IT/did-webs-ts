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
  _delegatorDid?: Did,
  _delegator?: IdentifierAndKeys
): object => {
  // pregenerate various helpful values and objects
  const thresholdIsFractional = Array.isArray(controller.kt);

  const threshold = calcutaleThreshold(controller.kt);

  const conditionalProofVerificationMethod = {
    ...idTypeControllerBlock(
      controller.identifier as Aid,
      'ConditionalProof2022',
      controllerDid
    ),
    threshold,
    ...conditionalProofBlock(controller, thresholdIsFractional),
  };

  const keyVerificationMethods = controller.keys.map((key) =>
    keyBlock(controllerDid, key)
  );

  // use pregenerated values to create the document
  return {
    id: controllerDid,
    // if threshold is 2 or more, there must be a conditional proof verification method
    verificationMethod:
      threshold > 1
        ? [conditionalProofVerificationMethod, ...keyVerificationMethods]
        : keyVerificationMethods,
    // if threshold is 1, then the controller authenticates and asserts with their key
    // if threshold is 2 or more, or if it's an array of fractions, then the controller authenticates and asserts with the conditional proof
    authentication: [
      threshold > 1 ? `#${controller.identifier}` : `#${controller.keys[0]}`,
    ],
    assertionMethod: [
      threshold > 1 ? `#${controller.identifier}` : `#${controller.keys[0]}`,
    ],
    service: [],
    alsoKnownAs: [didWeb(controllerDid), didKeri(controllerDid)],
  };
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

const didWeb = (did: Did): string =>
  did.replace(/^did:webs:(.+)$/, 'did:web:$1');

const didKeri = (did: Did): string =>
  did.replace(/^did:webs:(?:[^:]+:)*([^:]+)$/, 'did:keri:$1');

const extractDenominator = (fraction: string): number => {
  const parts = fraction.split('/');
  return Number(parts[1]);
};

function expandFraction(
  lcd: number
): (value: string, index: number, array: string[]) => number {
  return (fraction) => {
    const [numStr, denomStr] = fraction.split('/');
    const numerator = Number(numStr);
    const denominator = Number(denomStr);
    return numerator * (lcd / denominator);
  };
}

const divideByTwo = (num: number): number => num / 2;

const findLowestCommonMultiple = (a: number, b: number): number => lcm(a, b);
