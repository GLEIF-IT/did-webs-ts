import { createKey, Key } from '../core/Key.js';
import { decodeKey } from './decodeKey.js';

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
      '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk'
    );
    const key = decodeKey(cesrKey as Key);
    expect(key).toEqual('Db32nkgy-7DvUdb9OVvMarlxU5DttFt4O6GF4X4M9iQ');
  });
});
