import { Did } from '../../core/Did.js';
import { Key } from '../../core/Key.js';
import { computeXAndYForSecp256k1 } from '../document/computeXAndYForSecp256k1.js';
import { decodeKey } from '../key/decodeKey.js';
import { generateIdTypeControllerBlock } from './generateIdTypeControllerBlock.js';

export const generateKeyBlock = (controllerDid: Did, key: Key) => ({
  ...generateIdTypeControllerBlock(key as Key, 'JsonWebKey2020', controllerDid),
  publicKeyJwk: {
    kid: key,
    kty: key.startsWith('1AAA') ? 'EC' : 'OKP',
    crv: key.startsWith('1AAA') ? 'secp256k1' : 'Ed25519',
    ...(key.startsWith('1AAA')
      ? computeXAndYForSecp256k1(decodeKey(key))
      : { x: decodeKey(key) }),
  },
});
