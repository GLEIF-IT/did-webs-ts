const singleSignerNoDelegationImposter =
  // from microburst
  {
    id: 'did:webs:localhost%3A8080:identity:artist:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
    verificationMethod: [
      {
        id: '#DabcdefghijyNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6', // changed
        type: 'JsonWebKey',
        controller:
          'did:webs:localhost%3A8080:identity:artist:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
        publicKeyJwk: {
          kid: 'DabcdefghijyNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
          kty: 'OKP',
          crv: 'Ed25519',
          x: 'yDdscsS3zrI2pv1ixAnCgm61234567890_o9CJBug_o', // changed
        },
      },
    ],
    authentication: ['#DabcdefghijyNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
    assertionMethod: ['#DabcdefghijyNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
    service: [],
    alsoKnownAs: [
      'did:web:localhost%3A8080:identity:artist:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      'did:keri:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
    ],
  };

export default singleSignerNoDelegationImposter;
