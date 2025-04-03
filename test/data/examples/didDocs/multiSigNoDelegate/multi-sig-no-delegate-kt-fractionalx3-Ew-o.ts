export default {
  id: 'did:webs:example.com%3A8080:path:to:dids:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
  verificationMethod: [
    {
      id: '#Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
      type: 'ConditionalProof2022',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
      threshold: 6, // should be lcd / 2 (the spec shows it wrong)
      conditionWeightedThreshold: [
        {
          condition: '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
          weight: 6,
        },
        {
          condition: '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
          weight: 4,
        },
        {
          condition: '#DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
          weight: 3,
        },
      ],
    },
    {
      id: '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
      type: 'JsonWebKey',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
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
      type: 'JsonWebKey',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
      publicKeyJwk: {
        kid: 'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'D69b3KdKS85a_l7uJ22KQsA11LqkY7YgcnLu_SvKm8Q',
      },
    },
    {
      id: '#DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      type: 'JsonWebKey',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
      publicKeyJwk: {
        kid: 'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'tYmuwogeuufVDWPLagSLwGa_poRzC7IiqCeBV_ac3C4',
      },
    },
  ],
  authentication: ['#Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M'],
  assertionMethod: ['#Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M'],
  service: [],
  alsoKnownAs: [
    'did:web:example.com%3A8080:path:to:dids:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
    'did:keri:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
  ],
};
