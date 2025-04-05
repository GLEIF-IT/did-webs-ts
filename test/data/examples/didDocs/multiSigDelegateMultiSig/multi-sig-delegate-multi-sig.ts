export default {
  id: 'did:webs:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
  verificationMethod: [
    {
      id: '#EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      type: 'ConditionalProof2022',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      threshold: 2,
      conditionThreshold: [
        '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        '#DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      ],
    },
    {
      id: '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
      type: 'JsonWebKey2020',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      publicKeyJwk: {
        kid: '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        kty: 'EC',
        crv: 'secp256k1',
        x: 'Db32nkgy-7DvUdb9OVvMarlxU5DttFt4O6GF4X4M9iQ',
        y: 'w5MifYMEP1lulhw2Ov8Vk_W_pg71WsAF8QodavOFxK4',
      },
    },
    {
      id: '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
      type: 'JsonWebKey2020',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      publicKeyJwk: {
        kid: 'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'D69b3KdKS85a_l7uJ22KQsA11LqkY7YgcnLu_SvKm8Q',
      },
    },
    {
      id: '#DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      type: 'JsonWebKey2020',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      publicKeyJwk: {
        kid: 'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'tYmuwogeuufVDWPLagSLwGa_poRzC7IiqCeBV_ac3C4',
      },
    },
  ],
  authentication: ['#EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc'],
  assertionMethod: ['#EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc'],
  capabilityDelegation: [
    {
      id: '#ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      type: 'ConditionalProof2022',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      threshold: 2,
      conditionThreshold: [
        '#DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
        '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-D123',
      ],
    },
    {
      id: '#DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
      type: 'JsonWebKey2020',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      publicKeyJwk: {
        kid: 'DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'yDdscsS3zrI2pv1ixAnCgm6wjGEX9BQlA_o9CJBug_o',
      },
    },
    {
      id: '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
      type: 'JsonWebKey2020',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      publicKeyJwk: {
        kid: 'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'D69b3KdKS85a_l7uJ22KQsA11LqkY7YgcnLu_SvKm8Q',
      },
    },
    {
      id: '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-D123',
      type: 'JsonWebKey2020',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      publicKeyJwk: {
        kid: '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-D123',
        kty: 'EC',
        crv: 'secp256k1',
        x: 'Db32nkgy-7DvUdb9OVvMarlxU5DttFt4O6GF4X4PXbc',
        y: 'RmvzTEmgInp-Jo0Usf4HyAgioqUPn1s_BFjbfD-m3ow',
      },
    },
  ],
  service: [],
  alsoKnownAs: [
    'did:web:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
    'did:keri:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
  ],
};
