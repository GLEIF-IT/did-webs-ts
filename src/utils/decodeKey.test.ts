import { createKey, Key } from '../core/Key.js';
import { decodeKey } from './decodeKey.js';
import { encodeKey } from './encodeKey.js';

describe('decodeKey', () => {
  it('should correctly decode an Ed25519 key', () => {
    const cesrKey = createKey('DHr0-I-mMN7h6cLMOTRJkkfPuMd0vgQPrOk4Y3edaHjr');
    const key = decodeKey(cesrKey as Key);
    expect(key).toEqual('evT4j6Yw3uHpwsw5NEmSR8-4x3S-BA-s6Thjd51oeOs');
  });
  it('should correctly decode a different Ed25519 key', () => {
    const cesrKey = createKey('DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE');
    const key = decodeKey(cesrKey as Key);
    expect(key).toEqual('D69b3KdKS85a_l7uJ22KQsA11LqkY7YgcnLu_SvKm8Q');
  });
  it('should correctly decode an secp256k1 key', () => {
    const cesrKey = createKey(
      '1AAABy1XyJ2pG8a3M2KdQW6h9ZV4Ot_NlbB8Cj7X-s4IRpcd'
    );
    const key = decodeKey(cesrKey as Key);
    expect(key).toEqual('By1XyJ2pG8a3M2KdQW6h9ZV4Ot_NlbB8Cj7X-s4IRpcd');
  });
  it('should do handle round trips', () => {
    const ecd25519Key = 'evT4j6Yw3uHpwsw5NEmSR8-4x3S-BA-s6Thjd51oeOs';
    const ecd25519E = encodeKey('D', ecd25519Key);
    const ecd25519D = decodeKey(ecd25519E as Key);
    const secp256k1Key = 'By1XyJ2pG8a3M2KdQW6h9ZV4Ot_NlbB8Cj7X-s4IRpcd';
    const secp256k1E = encodeKey('1AAA', secp256k1Key);
    const secp256k1D = decodeKey(secp256k1E as Key);
    expect(ecd25519D).toEqual(ecd25519Key);
    expect(secp256k1D).toEqual(secp256k1Key);
  });
});
