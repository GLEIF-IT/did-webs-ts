import { publishDid } from './publishDid.js';

describe('publishDid', () => {
  it('should publish a DID document and cesr stream with delegation', () => {
    // not verifiable cesr
    // 'dip' event is associated with the controller (first 'icp' event)
    const cesr =
      '{"v":"KERI10JSON00012b_","t":"icp","d":"ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc","i":"ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc","s":"0","kt":"1","k":["DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6"],"nt":"1","n":["EAGQeFxU44hUf7nh2SqMNT28AIpRiuCh6dwRcyYUiyBn"],"bt":"0","b":[],"c":[],"a":[]}-VAn-AABAABHD-l5cMZ5TlCFaOEoaQYE56bRE2g94wWcg3PNF_SItkzKzzGDs-wOpT8cReSOY00hbiP867-C-ZL2eYvDKQwL-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-18T02c55c35d866589p00c00{"v":"KERI10JSON00012b_","t":"icp","d":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","i":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","s":"0","kt":"1","k":["DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC"],"nt":"1","n":["EBC3wESsVMjte9pDOsxi3qqw2YdFIhP0aDJCdGiy01ua"],"bt":"0","b":[],"c":[],"a":[]}-VAn-AABAAAW1O2bZA5O5yBQHGKBD2yx2B11xpJxzfyindvhSX04UlQrNHtcAXId3sltuefTJBxgO3OZKNE-2ljCoTLtIUYN-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-18T02c55c31d737109p00c00{"v":"KERI10JSON00013a_","t":"ixn","d":"EGYHF4pJVULp2mJp-pLEhTV2Y50AejwIQQzxq7esJ4Al","i":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","s":"1","p":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","a":[{"i":"EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy","s":"0","d":"EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy"}]}-VAn-AABAACZICtFrev9oC7SLeIX2AQJqGuLIsh3r5E0KeBS0wIZZKs7px9EgbVMtuRMKzEHKYCOMWTV4-TjPa-McRs_GJED-EAB0AAAAAAAAAAAAAAAAAAAAAAB1AAG2025-03-18T02c55c33d647624p00c00{"v":"KERI10JSON00015f_","t":"dip","d":"ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc","i":"ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc","s":"0","kt":"1","k":["DFl61PVNLsQ6Jo3c1Eu6H6vMDzdrXirdDHSVh86PD5Kp"],"nt":"1","n":["EL0fKE9YzQ4MH-mH_KyLlkxwYEXUFNP5-Q3CUk6CcBVJ"],"bt":"0","b":[],"c":[],"a":[],"di":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY"}-VA5-AABAABr97VaAprnXEBe2VhADpAoacNCxzHyAkTDCohmU01_i8rYVR5AMXFNKKEkwDuGM1AtY7_hR9icS3-daXKs7PoL-GAB0AAAAAAAAAAAAAAAAAAAAAABEGYHF4pJVULp2mJp-pLEhTV2Y50AejwIQQzxq7esJ4Al-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-18T02c55c29d596396p00c00{"v":"KERI10JSON000106_","t":"rpy","d":"EGvQTElaKrVtpamSeWm32WOvKkccHpXZJpcpI-39NqmS","dt":"2022-01-20T12:57:59.823350+00:00","r":"/loc/scheme","a":{"eid":"EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy","scheme":"https","url":"https://keria-test.rootsid.cloud/"}}-VA0-FABEAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy0AAAAAAAAAAAAAAAAAAAAAAAEAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy-AABAACxoJBoN6bPn3prKvtDUxzuyaAMAFJ1Oa4gSsx7DRU1tp6HDJcmyC3FV3vjyZMcwhxk02fzbfx8AQmDr2hD4UoL{"v":"KERI10JSON000111_","t":"rpy","d":"EGVVcnbOtBH50MWet4vOydIlVmqYS6De9w64Iy8CmGiO","dt":"2025-03-18T02:55:36.476000+00:00","r":"/end/role/add","a":{"cid":"ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc","role":"agent","eid":"EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy"}}-VA0-FABECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc0AAAAAAAAAAAAAAAAAAAAAAAECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc-AABAABN10fI6u0pPxtso17mNrQ5P_ueSCjXX9MyKMH4oYLqd64wPYf_hCbgEGttoQT2ioeh9kkAyozTbo1GaQyizUkI';
    const document = {
      id: 'did:webs:example.com%3A8080:identity:did:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      verificationMethod: [
        {
          id: '#DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
          type: 'JsonWebKey2020',
          controller:
            'did:webs:example.com%3A8080:identity:did:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
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
      capabilityDelegation: [
        {
          id: '#DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC',
          type: 'JsonWebKey2020',
          controller:
            'did:webs:example.com%3A8080:identity:did:EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY',
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
        'did:web:example.com%3A8080:identity:did:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
        'did:keri:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      ],
    };

    const [didJson, keriCesr, did] = publishDid(cesr, {
      host: 'example.com',
      port: 8080,
      path: '/identity/did',
    });

    // console.log('Generated DID Document:', JSON.stringify(result[0], null, 2));
    // console.log('Expected DID Document:', JSON.stringify(document, null, 2));

    expect(didJson).toEqual(document);
    expect(keriCesr).toBe(cesr);
    expect(did).toBe(
      'did:webs:example.com%3A8080:identity:did:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc'
    );
  });

  it('should generate a DID document and cesr stream without delegation', () => {
    // not verifiable cesr
    // no 'dip' event associated with the controller (first 'icp' event)
    const cesr =
      '{"v":"KERI10JSON00012b_","t":"icp","d":"ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc","i":"ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc","s":"0","kt":"1","k":["DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6"],"nt":"1","n":["EAGQeFxU44hUf7nh2SqMNT28AIpRiuCh6dwRcyYUiyBn"],"bt":"0","b":[],"c":[],"a":[]}-VAn-AABAABHD-l5cMZ5TlCFaOEoaQYE56bRE2g94wWcg3PNF_SItkzKzzGDs-wOpT8cReSOY00hbiP867-C-ZL2eYvDKQwL-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-18T02c55c35d866589p00c00{"v":"KERI10JSON00012b_","t":"icp","d":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","i":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","s":"0","kt":"1","k":["DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC"],"nt":"1","n":["EBC3wESsVMjte9pDOsxi3qqw2YdFIhP0aDJCdGiy01ua"],"bt":"0","b":[],"c":[],"a":[]}-VAn-AABAAAW1O2bZA5O5yBQHGKBD2yx2B11xpJxzfyindvhSX04UlQrNHtcAXId3sltuefTJBxgO3OZKNE-2ljCoTLtIUYN-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-18T02c55c31d737109p00c00{"v":"KERI10JSON00013a_","t":"ixn","d":"EGYHF4pJVULp2mJp-pLEhTV2Y50AejwIQQzxq7esJ4Al","i":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","s":"1","p":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","a":[{"i":"EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy","s":"0","d":"EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy"}]}-VAn-AABAACZICtFrev9oC7SLeIX2AQJqGuLIsh3r5E0KeBS0wIZZKs7px9EgbVMtuRMKzEHKYCOMWTV4-TjPa-McRs_GJED-EAB0AAAAAAAAAAAAAAAAAAAAAAB1AAG2025-03-18T02c55c33d647624p00c00{"v":"KERI10JSON00015f_","t":"dip","d":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","i":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY","s":"0","kt":"1","k":["DFl61PVNLsQ6Jo3c1Eu6H6vMDzdrXirdDHSVh86PD5Kp"],"nt":"1","n":["EL0fKE9YzQ4MH-mH_KyLlkxwYEXUFNP5-Q3CUk6CcBVJ"],"bt":"0","b":[],"c":[],"a":[],"di":"EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY"}-VA5-AABAABr97VaAprnXEBe2VhADpAoacNCxzHyAkTDCohmU01_i8rYVR5AMXFNKKEkwDuGM1AtY7_hR9icS3-daXKs7PoL-GAB0AAAAAAAAAAAAAAAAAAAAAABEGYHF4pJVULp2mJp-pLEhTV2Y50AejwIQQzxq7esJ4Al-EAB0AAAAAAAAAAAAAAAAAAAAAAA1AAG2025-03-18T02c55c29d596396p00c00{"v":"KERI10JSON000106_","t":"rpy","d":"EGvQTElaKrVtpamSeWm32WOvKkccHpXZJpcpI-39NqmS","dt":"2022-01-20T12:57:59.823350+00:00","r":"/loc/scheme","a":{"eid":"EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy","scheme":"https","url":"https://keria-test.rootsid.cloud/"}}-VA0-FABEAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy0AAAAAAAAAAAAAAAAAAAAAAAEAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy-AABAACxoJBoN6bPn3prKvtDUxzuyaAMAFJ1Oa4gSsx7DRU1tp6HDJcmyC3FV3vjyZMcwhxk02fzbfx8AQmDr2hD4UoL{"v":"KERI10JSON000111_","t":"rpy","d":"EGVVcnbOtBH50MWet4vOydIlVmqYS6De9w64Iy8CmGiO","dt":"2025-03-18T02:55:36.476000+00:00","r":"/end/role/add","a":{"cid":"ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc","role":"agent","eid":"EAeTw37tF4CZ33Zry1SrGdUEA-dOuGJBnGjeUKBvCINy"}}-VA0-FABECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc0AAAAAAAAAAAAAAAAAAAAAAAECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc-AABAABN10fI6u0pPxtso17mNrQ5P_ueSCjXX9MyKMH4oYLqd64wPYf_hCbgEGttoQT2ioeh9kkAyozTbo1GaQyizUkI';

    const document = {
      id: 'did:webs:example.com%3A8080:identity:did:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      verificationMethod: [
        {
          id: '#DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
          type: 'JsonWebKey2020',
          controller:
            'did:webs:example.com%3A8080:identity:did:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
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
      service: [],
      alsoKnownAs: [
        'did:web:example.com%3A8080:identity:did:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
        'did:keri:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
      ],
    };

    const [didJson, keriCesr, did] = publishDid(cesr, {
      host: 'example.com',
      port: 8080,
      path: '/identity/did',
    });

    // console.log('Generated DID Document:', JSON.stringify(result[0], null, 2));
    // console.log('Expected DID Document:', JSON.stringify(document, null, 2));

    expect(didJson).toEqual(document);
    expect(keriCesr).toBe(cesr);
    expect(did).toBe(
      'did:webs:example.com%3A8080:identity:did:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc'
    );
  });
});
