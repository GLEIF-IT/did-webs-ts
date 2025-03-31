import { isValidDidCore } from './isValidDidCore.js';

describe('isValidDidDocument', () => {
  it('should validate a DID Document', () => {
    const didDocument = {
      id: 'did:webs:localhost%3A8080:identity:artist:EDAj_Cfqhc3vPZbTnn-3_JCN1xeWVYtiD_GKnC2FFys9',
      verificationMethod: [
        {
          id: '#DBoX3vgrhzsPCKCGWamY85w1McAB6n0-_qZnRAD3w_Ai',
          type: 'JsonWebKey',
          controller:
            'did:webs:localhost%3A8080:identity:artist:EDAj_Cfqhc3vPZbTnn-3_JCN1xeWVYtiD_GKnC2FFys9',
          publicKeyJwk: {
            kid: 'DBoX3vgrhzsPCKCGWamY85w1McAB6n0-_qZnRAD3w_Ai',
            kty: 'OKP',
            crv: 'Ed25519',
            x: 'Ghfe-CuHOw8IoIZZqZjznDUxwAHqfT7-pmdEAPfD8CI',
          },
        },
      ],
      authentication: ['#DBoX3vgrhzsPCKCGWamY85w1McAB6n0-_qZnRAD3w_Ai'],
      assertionMethod: ['#DBoX3vgrhzsPCKCGWamY85w1McAB6n0-_qZnRAD3w_Ai'],
      service: [],
      alsoKnownAs: [
        'did:web:localhost%3A8080:identity:artist:EDAj_Cfqhc3vPZbTnn-3_JCN1xeWVYtiD_GKnC2FFys9',
        'did:keri:EDAj_Cfqhc3vPZbTnn-3_JCN1xeWVYtiD_GKnC2FFys9',
      ],
    };
    expect(isValidDidCore(didDocument)).toBe(true);
  });
});
