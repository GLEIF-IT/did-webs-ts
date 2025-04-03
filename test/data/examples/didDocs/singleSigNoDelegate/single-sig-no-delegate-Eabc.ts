export default {
  id: 'did:webs:example.com%3A8080:path:to:dids:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
  verificationMethod: [
    {
      id: '#DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123',
      type: 'JsonWebKey',
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
  service: [],
  alsoKnownAs: [
    'did:web:example.com%3A8080:path:to:dids:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
    'did:keri:EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123',
  ],
};
