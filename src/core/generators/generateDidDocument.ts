import { IdentifierAndKeys } from '../IdentifierAndKeys.js';
import { Did } from '../Did.js';

export const generateDidDocument = (
  did: Did,
  controller: IdentifierAndKeys
): object => {
  const extraProps = conditionThreshold(controller);
  // console.log(`Controller keys: ${controller.keys}`);
  // console.log('Extra properties?: ', JSON.stringify(extraProps));
  return {
    id: did,
    verificationMethod: [
      {
        id: `#${controller.keys[0]}`,
        type: 'JsonWebKey',
        controller: did,
        ...extraProps,
        publicKeyJwk: {
          kid: controller.keys[0],
          kty: 'OKP',
          crv: 'Ed25519',
          x: 'yDdscsS3zrI2pv1ixAnCgm6wjGEX9BQlA_o9CJBug_o',
        },
      },
    ],
    authentication: [`#${controller.keys[0]}`],
    assertionMethod: [`#${controller.keys[0]}`],
    service: [],
    alsoKnownAs: [convertToDidWeb(did), convertToDidKeri(did)],
  };
};
const conditionThreshold = (controller: IdentifierAndKeys) => {
  return controller.keys.length > 1
    ? ({
        threshold: 2,
        conditionThreshold: controller.keys.map((key) => `#${key}`),
      } as object)
    : ({} as object);
};

const convertToDidWeb = (did: Did): string =>
  did.replace(/^did:webs:(.+)$/, 'did:web:$1');

const convertToDidKeri = (did: Did): string =>
  did.replace(/^did:webs:(?:[^:]+:)*([^:]+)$/, 'did:keri:$1');
