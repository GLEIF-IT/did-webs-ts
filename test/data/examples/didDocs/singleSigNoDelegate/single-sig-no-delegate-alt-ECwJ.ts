export default {
  id: 'did:webs:example.com%3A8080:path:to:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
  verificationMethod: [
    {
      id: '#DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
      type: 'JsonWebKey',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      publicKeyJwk: {
        kid: 'DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'yDdscsS3zrI2pv1ixAnCgm6wjGEX9BQlA_o9CJBug_o',
      },
    },
  ],
  authentication: ['#DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
  assertionMethod: ['#DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
  alsoKnownAs: [
    'did:web:example.com%3A8080:path:to:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
    'did:keri:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
  ],
  service: [],
};
