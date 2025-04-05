import { encodeKey } from './encodeKey.js';

describe('encodeKey', () => {
  it('should correctly encode an Ed25519 key', () => {
    const key = 'evT4j6Yw3uHpwsw5NEmSR8-4x3S-BA-s6Thjd51oeOs';
    const encodedKey = encodeKey('D', key);
    expect(encodedKey).toEqual('DHr0-I-mMN7h6cLMOTRJkkfPuMd0vgQPrOk4Y3edaHjr');
  });
  it('should correctly encode a secp256k1 key', () => {
    const key = 'By1XyJ2pG8a3M2KdQW6h9ZV4Ot_NlbB8Cj7X-s4IRpcd';
    const encodedKey = encodeKey('1AAA', key);
    expect(encodedKey).toEqual(
      '1AAABy1XyJ2pG8a3M2KdQW6h9ZV4Ot_NlbB8Cj7X-s4IRpcd'
    );
  });
});

// 1AAA9p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk
