import { IdentifierAndKeys } from '../IdentifierAndKeys.js';

import { generateDid } from './generateDid.js';
import { generateDocument } from './generateDocument.js';
import { isValidDidCoreDocument } from '../../utils/validators/isValidDidCoreDocument.js';
import { didDocsAreEqual } from '../../utils/didDocsAreEqual.js';

import singleSigEd25519NoDelegateECwJ from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-ECwJ.js';
import singleSigEd25519NoDelegateEabc from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-Eabc.js';
import singleSigSecp256k1NoDelegateEBBa from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-EBBa.js';
// import multiSigNoDelegateEw_O from '../../../test/data/examples/didDocs/multiSigNoDelegate/multi-sig-no-delegate-Ew-o.js';

const hostname = 'example.com';
const path = '/path/to/dids';
const port = 8080;

describe('generateDocument', () => {
  it('should generate a valid DID document', () => {
    const aid = 'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc';
    const did = generateDid(hostname, aid, path, port);
    const controller = {
      identifier: aid,
      keys: ['DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const result = isValidDidCoreDocument(generated);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a given identifier and Ed25519 key', () => {
    const aid = 'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc';
    const did = generateDid(hostname, aid, path, port);
    const controller = {
      identifier: aid,
      keys: ['DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6'],
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const expected = singleSigEd25519NoDelegateECwJ;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a different identifier and Ed25519 key', () => {
    const aid = 'EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123'; // Different identifier
    const did = generateDid(hostname, aid, path, port);
    const controller = {
      identifier: aid,
      keys: ['DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123'], // Different key
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const expected = singleSigEd25519NoDelegateEabc;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a given identifier and secp256k1 key', () => {
    const aid = 'EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc';
    const did = generateDid(hostname, aid, path, port);
    const controller = {
      identifier: aid,
      keys: ['1AAAAnm-Zm76dy6xVaAmlezocLHAKb-zLLzcopyXygUbFvh5'],
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const expected = singleSigSecp256k1NoDelegateEBBa;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  // it('should generate the correct DID document for a given identifier with multiple keys', () => {
  //   const aid = 'Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M';
  //   const did = generateDid(hostname, aid, path, port);
  //   const controller = {
  //     identifier: aid,
  //     keys: [
  //       '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
  //       'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
  //       'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
  //     ], // TODO: implement integer and fractional weights
  //   } as IdentifierAndKeys;
  //   const generated = generateDidDocument(did, controller);
  //   const expected = multiSigNoDelegateEw_O;
  //   const result = didDocsAreEqual(generated, expected);
  //   // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
  //   // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
  //   expect(result).toBe(true);
  // });
});
