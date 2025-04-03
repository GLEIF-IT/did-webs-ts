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
  capabilityDelegation: [
    // delagator key id
    '#DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC',
    {
      // delegator cesr encoded key (external)
      id: 'DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC',
      type: 'JsonWebKey2020',
      // delegator did (external) - delegator event stream available here
      controller:
        'didwebs:foo.com:EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY',
      // decoded delegator key (external)
      publicKeyJwk: {
        kid: 'DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'sWx1l70ORJz-KsadW8_AJOOIbRQcgwVdCTUHLWVHk0I',
      },
    },
  ],
  service: [],
  alsoKnownAs: [
    'did:web:example.com%3A8080:path:to:dids:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
    'did:keri:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
  ],
};
