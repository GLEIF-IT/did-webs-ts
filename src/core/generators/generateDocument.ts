import { IdentifierAndKeys } from '../IdentifierAndKeys.js';
import { Did } from '../Did.js';
import { decodeKey } from '../../utils/decodeKey.js';
import { computeXAndYForSecp256k1 } from '../../utils/computeXAndYForSecp256k1.js';

export const generateDocument = (
  did: Did,
  controller: IdentifierAndKeys
): object => {
  const thresholdIsFractional = Array.isArray(controller.kt);
  const threshold = calculateThreshold(controller.kt);

  const conditionalProofVerificationMethod = thresholdIsFractional
    ? (() => {
        const weights = calculateWeights(controller.kt as string[]);
        return {
          id: `#${controller.identifier}`,
          type: 'ConditionalProof2022',
          controller: did,
          threshold,
          // for each key, there should be a corresponding weight, print them as specified
          conditionWeightedThreshold: controller.keys.map((key, index) => {
            return {
              condition: `#${key}`,
              weight: weights[index],
            };
          }),
        };
      })()
    : {
        id: `#${controller.identifier}`,
        type: 'ConditionalProof2022',
        controller: did,
        threshold,
        conditionThreshold: controller.keys.map((key) => `#${key}`),
      };
  const keyVerificationMethods = controller.keys.map((key) =>
    key.startsWith('1AAA')
      ? (() => {
          const { x, y } = computeXAndYForSecp256k1(decodeKey(key));
          return {
            id: `#${key}`,
            type: 'JsonWebKey',
            controller: did,
            publicKeyJwk: {
              kid: key,
              kty: 'EC',
              crv: 'secp256k1',
              x,
              y,
            },
          };
        })()
      : {
          id: `#${key}`,
          type: 'JsonWebKey',
          controller: did,
          publicKeyJwk: {
            kid: key,
            kty: 'OKP',
            crv: 'Ed25519',
            x: decodeKey(key),
          },
        }
  );

  const verificationMethods =
    threshold > 1
      ? [conditionalProofVerificationMethod, ...keyVerificationMethods]
      : keyVerificationMethods;

  const didWeb = did.replace(/^did:webs:(.+)$/, 'did:web:$1');

  const didKeri = did.replace(/^did:webs:(?:[^:]+:)*([^:]+)$/, 'did:keri:$1');

  return {
    id: did,
    verificationMethod: verificationMethods,
    // if threshold is 1, then the controller authenticates and asserts with their key
    // if threshold is 2 or more, or if it's an array of fractions, then the controller authenticates and asserts with the conditional proof
    authentication: [
      threshold > 1 ? `#${controller.identifier}` : `#${controller.keys[0]}`,
    ],
    assertionMethod: [
      threshold > 1 ? `#${controller.identifier}` : `#${controller.keys[0]}`,
    ],
    service: [],
    alsoKnownAs: [didWeb, didKeri],
  };
};

const gcd = (a: number, b: number): number => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);

const splitFraction = (fraction: string): number => {
  const parts = fraction.split('/');
  return Number(parts[1]);
};
const calculateThreshold = (threshold: string | string[]): number => {
  if (Array.isArray(threshold)) {
    const denominators = threshold.map(splitFraction);
    const lcd = denominators.reduce((acc, d) => lcm(acc, d), denominators[0]);
    return lcd / 2;
  }
  return parseInt(threshold);
};

const calculateWeights = (fractions: string[]): number[] => {
  // Extract denominators from each fraction
  const denominators = fractions.map((fraction) =>
    Number(fraction.split('/')[1])
  );
  // Calculate the LCD using reduce
  const lcd = denominators.reduce((acc, d) => lcm(acc, d), denominators[0]);
  // Expand each fraction and return the new numerator (the weight)
  return fractions.map((fraction) => {
    const [numStr, denomStr] = fraction.split('/');
    const numerator = Number(numStr);
    const denominator = Number(denomStr);
    return numerator * (lcd / denominator);
  });
};
