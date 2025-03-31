import { decodeKey } from './decodeKey.js';

describe('decodeKey', () => {
  it('should correctly decode the key', () => {
    expect(decodeKey('DHr0-I-mMN7h6cLMOTRJkkfPuMd0vgQPrOk4Y3edaHjr')).toEqual(
      'evT4j6Yw3uHpwsw5NEmSR8-4x3S-BA-s6Thjd51oeOs'
    );
  });
});
