import { IdentifierAndKeys } from '../IdentifierAndKeys.js';
import { Did } from '../Did.js';
import { decodeKey } from '../../utils/decodeKey.js';
import { computeXAndYForSecp256k1 } from '../../utils/computeXAndYForSecp256k1.js';

export const generateDocument = (
  did: Did,
  controller: IdentifierAndKeys
): object => {
  const isMultiSig = controller.keys.length > 1;

  const conditionalProofVerificationMethod = {
    id: `#${controller.identifier}`,
    type: 'ConditionalProof2022',
    controller: did,
    threshold: 2,
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

  const verificationMethods = isMultiSig
    ? [conditionalProofVerificationMethod, ...keyVerificationMethods]
    : keyVerificationMethods;

  const didWeb = did.replace(/^did:webs:(.+)$/, 'did:web:$1');

  const didKeri = did.replace(/^did:webs:(?:[^:]+:)*([^:]+)$/, 'did:keri:$1');

  return {
    id: did,
    verificationMethod: verificationMethods,
    authentication: [
      isMultiSig ? `#${controller.identifier}` : `#${controller.keys[0]}`,
    ],
    assertionMethod: [
      isMultiSig ? `#${controller.identifier}` : `#${controller.keys[0]}`,
    ],
    service: [],
    alsoKnownAs: [didWeb, didKeri],
  };
};
