import { IdentifierAndKeys } from '../core/IdentifierAndKeys.js';

export const generateDidDocument = (controller: IdentifierAndKeys): object => ({
  id: `did:webs:localhost%3A8080:identity:artist:${controller.identifier}`,
  verificationMethod: [
    {
      id: `#${controller.keys[0]}`,
      type: 'JsonWebKey',
      controller: `did:webs:localhost%3A8080:identity:artist:${controller.identifier}`,
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
  alsoKnownAs: [
    `did:web:localhost%3A8080:identity:artist:${controller.identifier}`,
    `did:keri:${controller.identifier}`,
  ],
});
