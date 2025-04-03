export default {
  id: 'did:webs:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
  verificationMethod: [
    {
      id: '#1AAAAnm-Zm76dy6xVaAmlezocLHAKb-zLLzcopyXygUbFvh5',
      type: 'JsonWebKey',
      controller:
        'did:webs:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      publicKeyJwk: {
        kid: '1AAAAnm-Zm76dy6xVaAmlezocLHAKb-zLLzcopyXygUbFvh5',
        kty: 'EC',
        crv: 'secp256k1',
        x: 'eb5mbvp3LrFVoCaV7OhwscApv7MsvNyinJfKBRsW-Hk',
        y: 'TRT_GpKmf3C1o1-tCRLW-L41I4IqfT1KtrVIRVeXeMQ',
      },
    },
  ],
  authentication: ['#1AAAAnm-Zm76dy6xVaAmlezocLHAKb-zLLzcopyXygUbFvh5'],
  assertionMethod: ['#1AAAAnm-Zm76dy6xVaAmlezocLHAKb-zLLzcopyXygUbFvh5'],
  service: [],
  alsoKnownAs: [
    'did:web:example.com%3A8080:path:to:dids:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
    'did:keri:EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
  ],
};
