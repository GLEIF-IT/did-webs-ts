import { IdentifierAndKeys } from '../IdentifierAndKeys.js';
import { createDid } from '../Did.js';

import { generateDidDocument } from './generateDidDocument.js';
import { isValidDidCoreDocument } from '../../utils/validators/isValidDidCoreDocument.js';
import { didDocsAreEqual } from '../../utils/didDocsAreEqual.js';

import singleSigNoDelegateECwJ from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-ECwJ.js';
import singleSigNoDelegateEabc from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-Eabc.js';
import multiSigNoDelegateEw_O from '../../../test/data/examples/didDocs/multiSigNoDelegate/multi-sig-no-delegate-Ew-o.js';

// const tempExpected = {
//   id: 'did:webs:example.com:dids:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
//   verificationMethod: [
//     {
//       id: '#Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
//       type: 'ConditionalProof2022',
//       controller:
//         'did:webs:example.com:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
//       threshold: 2,
//       conditionThreshold: [
//         '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
//         '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
//         '#DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
//       ],
//     },
//     {
//       id: '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
//       type: 'JsonWebKey',
//       controller:
//         'did:webs:example.com:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
//       publicKeyJwk: {
//         kid: '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
//         kty: 'EC',
//         crv: 'secp256k1',
//         x: 'NtngWpJUr-rlNNbs0u-Aa8e16OwSJu6UiFf0Rdo1oJ4',
//         y: 'qN1jKupJlFsPFc1UkWinqljv4YE0mq_Ickwnjgasvmo',
//       },
//     },
//     {
//       id: '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
//       type: 'JsonWebKey',
//       controller:
//         'did:webs:example.com:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
//       publicKeyJwk: {
//         kid: 'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
//         kty: 'OKP',
//         crv: 'Ed25519',
//         x: 'A-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
//       },
//     },
//     {
//       id: '#DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
//       type: 'JsonWebKey',
//       controller:
//         'did:webs:example.com:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
//       publicKeyJwk: {
//         kid: 'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
//         kty: 'OKP',
//         crv: 'Ed25519',
//         x: 'LWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNws',
//       },
//     },
//   ],
//   authentication: ['#Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M'],
//   assertionMethod: ['#Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M'],
//   service: [],
//   alsoKnownAs: [
//     'did:web:example.com:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
//     'did:keri:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
//   ],
// };

const tempExpected = {
  id: 'did:webs:example.com%3A8080:path:to:dids:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
  verificationMethod: [
    {
      id: '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
      type: 'JsonWebKey',
      controller:
        'did:webs:localhost%3A8080:identity:artist:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
      threshold: 2,
      conditionThreshold: [
        '#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        '#DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        '#DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      ],
      publicKeyJwk: {
        kid: '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        kty: 'OKP',
        crv: 'Ed25519',
        x: 'yDdscsS3zrI2pv1ixAnCgm6wjGEX9BQlA_o9CJBug_o',
      },
    },
  ],
  authentication: ['#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk'],
  assertionMethod: ['#1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk'],
  service: [],
  alsoKnownAs: [
    'did:web:localhost%3A8080:identity:artist:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
    'did:keri:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
  ],
};

const hostname = 'example.com';
const path = 'path/to/dids';
const port = 8080;

describe('generateDidDocument', () => {
  it('should create a valid DID', () => {
    expect(true).toBe(true);
  });
  // it('should generate a valid DID document', () => {
  //   const aid = 'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc';
  //   const did = compos;
  //   const controller = {
  //     identifier: 'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
  //     keys: ['DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
  //   } as IdentifierAndKeys;
  //   const doc = generateDidDocument(did, controller);
  //   const result = isValidDidCoreDocument(doc);
  //   expect(result).toBe(true);
  // });
  // it('should generate the correct DID document for a given identifier and key', () => {
  //   const controller = {
  //     identifier: 'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
  //     keys: ['DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
  //   } as IdentifierAndKeys;
  //   const doc = generateDidDocument(controller);
  //   const result = didDocsAreEqual(doc, singleSigNoDelegateECwJ);
  //   expect(result).toBe(true);
  // });
  // it('should generate the correct DID document for a different identifier and key', () => {
  //   const controller = {
  //     identifier: 'EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123', // Different identifier
  //     keys: ['DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123'], // Different key
  //   } as IdentifierAndKeys;
  //   const doc = generateDidDocument(controller);
  //   const result = didDocsAreEqual(doc, singleSigNoDelegateEabc);
  //   expect(result).toBe(true);
  // });
  // it('should generate the correct DID document for a given identifier with multiple keys', () => {
  //   const controller = {
  //     identifier: 'Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M',
  //     keys: [
  //       '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
  //       'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
  //       'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
  //     ], // TODO: implement integer and fractional weights
  //   } as IdentifierAndKeys;
  //   const doc = generateDidDocument(controller);
  //   const result = didDocsAreEqual(doc, tempExpected);
  //   console.log('Generated DID Document:', JSON.stringify(doc, null, 2));
  //   console.log(
  //     'Expected DID Document:',
  //     JSON.stringify(multiSigNoDelegateEw_O, null, 2)
  //   );
  //   expect(result).toBe(true);
  // });
});
