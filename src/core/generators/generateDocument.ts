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
  const thresholdIsFractional = Array.isArray(controller.kt);

  const threshold = calculateThreshold(controller.kt);

  const conditionalProofVerificationMethod = {
    ...idTypeController(
      controller.identifier as Aid,
      'ConditionalProof2022',
      controllerDid
    ),
    threshold,
    ...conditionalProof(controller, thresholdIsFractional),
  };

  const keyVerificationMethods = controller.keys.map((key) =>
    keyBlock(controllerDid, key)
  );

  return {
    id: controllerDid,
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

const calculateThreshold = (threshold: string | string[]): number =>
  Array.isArray(threshold)
    ? R.pipe(
        threshold,
        R.map(extractDenominator),
        R.reduce(findLowestCommonMultiple, 1),
        divideByTwo
      )
    : parseInt(threshold);

const extractDenominator = (fraction: string): number => {
  const parts = fraction.split('/');
  return Number(parts[1]);
};

const idTypeController = (
  identifier: Aid | Key,
  type: 'ConditionalProof2022' | 'JsonWebKey2020',
  controller: Did
): { id: Aid; type: string; controller: Did } => ({
  id: `#${identifier}` as Aid,
  type,
  controller,
});

const conditionalProof = (
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
  ...idTypeController(key as Key, 'JsonWebKey2020', controllerDid),
  publicKeyJwk: {
    kid: key,
    kty: key.startsWith('1AAA') ? 'EC' : 'OKP',
    crv: key.startsWith('1AAA') ? 'secp256k1' : 'Ed25519',
    ...(key.startsWith('1AAA')
      ? computeXAndYForSecp256k1(decodeKey(key))
      : { x: decodeKey(key) }),
  },
});

const didWeb = (did: Did): string =>
  did.replace(/^did:webs:(.+)$/, 'did:web:$1');

const didKeri = (did: Did): string =>
  did.replace(/^did:webs:(?:[^:]+:)*([^:]+)$/, 'did:keri:$1');

const divideByTwo = (num: number): number => num / 2;

const findLowestCommonMultiple = (a: number, b: number): number => lcm(a, b);

const calculateWeights = (fractions: string[]): number[] => {
  // Extract denominators from each fraction
  const denominators = fractions.map((fraction) =>
    Number(fraction.split('/')[1])
  );
  // Calculate the LCD using reduce
  const lcd = denominators.reduce(findLowestCommonMultiple, denominators[0]);
  // Expand each fraction and return the new numerator (the weight)
  return fractions.map((fraction) => {
    const [numStr, denomStr] = fraction.split('/');
    const numerator = Number(numStr);
    const denominator = Number(denomStr);
    return numerator * (lcd / denominator);
  });
};
