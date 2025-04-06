export default {
  id: 'did:webs:example.com%3A8080:path:to:dids:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
  verificationMethod: [
    {
      id: '#DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123',
      type: 'JsonWebKey2020',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
      publicKeyJwk: {
        kid: 'DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'ptxscsS3zrI2pv1ixAnCgm6wjGEX9BQlA_o9CJBvXbc',
      },
    },
  ],
  authentication: ['#DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123'],
  assertionMethod: ['#DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123'],
  // publicKeyJwk: {
  //   kid: '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
  //   kty: 'EC',
  //   crv: 'secp256k1',
  //   x: 'Db32nkgy-7DvUdb9OVvMarlxU5DttFt4O6GF4X4M9iQ',
  //   y: 'w5MifYMEP1lulhw2Ov8Vk_W_pg71WsAF8QodavOFxK4',
  // },
  capabilityDelegation: [
    {
      // delegator cesr encoded key (external)
      id: '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
      type: 'JsonWebKey2020',
      // delegator did (external) - delegator event stream available here
      controller:
        'did:webs:foo.com:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      // decoded delegator key (external)
      publicKeyJwk: {
        kid: '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        kty: 'EC',
        crv: 'secp256k1',
        x: 'Db32nkgy-7DvUdb9OVvMarlxU5DttFt4O6GF4X4M9iQ',
        y: 'w5MifYMEP1lulhw2Ov8Vk_W_pg71WsAF8QodavOFxK4',
      },
    },
  ],
  service: [],
  alsoKnownAs: [
    'did:web:example.com%3A8080:path:to:dids:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
    'did:keri:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
  ],
};
