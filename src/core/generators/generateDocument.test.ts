import { IdentifierAndKeys } from '../IdentifierAndKeys.js';

import { generateDid } from './generateDid.js';
import { generateDocument } from './generateDocument.js';
import { isValidDidCoreDocument } from '../../utils/validators/isValidDidCoreDocument.js';
import { didDocsAreEqual } from '../../utils/didDocsAreEqual.js';

import singleSigEd25519NoDelegateECwJ from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-ECwJ.js';
import singleSigEd25519NoDelegateEabc from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-Eabc.js';
import singleSigSecp256k1NoDelegateEBBa from '../../../test/data/examples/didDocs/singleSigNoDelegate/single-sig-no-delegate-EBBa.js';
import multiSigNoDelegateEw_O from '../../../test/data/examples/didDocs/multiSigNoDelegate/multi-sig-no-delegate-Ew-o.js';
import multiSigNoDelegateKt3Ew_O from '../../../test/data/examples/didDocs/multiSigNoDelegate/multi-sig-no-delegate-kt3-Ew-o.js';
import multiSigNoDelegateKtFractionalx3EwO from '../../../test/data/examples/didDocs/multiSigNoDelegate/multi-sig-no-delegate-kt-fractionalx3-Ew-o.js';
import multiSigNoDelegateKtFractionalx5EwO from '../../../test/data/examples/didDocs/multiSigNoDelegate/multi-sig-no-delegate-kt-fractionalx5-Ew-o.js';
import singleSigDelegateSingleSigEBBa from '../../../test/data/examples/didDocs/singleSigDelegateSingleSig/single-sig-delegate-single-sig-EBBa.js';
import singleSigDelegateSingleSigEabc from '../../../test/data/examples/didDocs/singleSigDelegateSingleSig/single-sig-delegate-single-sig-Eabc.js';
import multiSigDelegateMultiSig from '../../../test/data/examples/didDocs/multiSigDelegateMultiSig/multi-sig-delegate-multi-sig.js';

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
      kt: '1',
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
      kt: '1',
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
      kt: '1',
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
      kt: '1',
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const expected = singleSigSecp256k1NoDelegateEBBa;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a given identifier with delegated authority from a single signer', () => {
    const controllerAid = 'EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc';
    const controllerDid = generateDid(hostname, controllerAid, path, port);
    const controller = {
      identifier: controllerAid,
      keys: ['DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123'],
      kt: '1',
    } as IdentifierAndKeys;
    const delegatorAid = 'EM0v8tEza5NnAxEC2Ohno2vjqoJmdoeTHLFz_j7FlAcY';
    const delegatorDid = generateDid('foo.com', delegatorAid);
    const delegator = {
      identifier: delegatorAid,
      keys: ['DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC'],
      kt: '1',
    } as IdentifierAndKeys;
    const generated = generateDocument(
      controllerDid,
      controller,
      delegatorDid,
      delegator
    );
    const expected = singleSigDelegateSingleSigEBBa;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a differnt identifier with delegated authority from a single signer', () => {
    const controllerAid = 'EabclFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9123'; // Different identifier
    const controllerDid = generateDid(hostname, controllerAid, path, port);
    const controller = {
      identifier: controllerAid,
      keys: ['DabcbHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQb123'], // Different key
      kt: '1',
    } as IdentifierAndKeys;
    const delegatorAid = 'EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc';
    const delegatorDid = generateDid('foo.com', delegatorAid);
    const delegator = {
      identifier: delegatorAid,
      keys: ['1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk'],
      kt: '1',
    } as IdentifierAndKeys;
    const generated = generateDocument(
      controllerDid,
      controller,
      delegatorDid,
      delegator
    );
    const expected = singleSigDelegateSingleSigEabc;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });

  it('should generate the correct DID document for a given identifier with multiple keys', () => {
    const aid = 'Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M';
    const did = generateDid(hostname, aid, path, port);
    const controller = {
      identifier: aid,
      keys: [
        '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      ],
      kt: '2',
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const expected = multiSigNoDelegateEw_O;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a given identifier with multiple keys when the key threshold is an integer', () => {
    const aid = 'Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M';
    const did = generateDid(hostname, aid, path, port);
    const controller = {
      identifier: aid,
      keys: [
        '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      ],
      kt: '3',
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const expected = multiSigNoDelegateKt3Ew_O;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a given identifier with multiple keys when the key threshold is an array of fractions', () => {
    const aid = 'Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M';
    const did = generateDid(hostname, aid, path, port);
    const controller = {
      identifier: aid,
      keys: [
        '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      ],
      kt: ['1/2', '1/3', '1/4'],
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const expected = multiSigNoDelegateKtFractionalx3EwO;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document when the key threshold is a different array of fractions', () => {
    const aid = 'Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M';
    const did = generateDid(hostname, aid, path, port);
    const controller = {
      identifier: aid,
      keys: [
        '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
        'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
        'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      ],
      kt: ['1/3', '1/3', '1/8', '1/5', '1/4'],
    } as IdentifierAndKeys;
    const generated = generateDocument(did, controller);
    const expected = multiSigNoDelegateKtFractionalx5EwO;
    const result = didDocsAreEqual(generated, expected);
    // console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    // console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
  it('should generate the correct DID document for a given identifier with multiple keys and with delegated authority from multiple signers', () => {
    const controllerAID = 'EBBalFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc';
    const controllerDid = generateDid(hostname, controllerAID, path, port);
    const controller = {
      identifier: controllerAID,
      keys: [
        '1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk',
        'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      ],
      kt: '2',
    } as IdentifierAndKeys;
    const delegatorAID = 'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc';
    const delegatorDid = generateDid(hostname, delegatorAID, path, port);
    const delegator = {
      identifier: delegatorAID,
      keys: [
        'DMg3bHLEt86yNqb9YsQJwoJusIxhF_QUJQP6PQiQboP6',
        'DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE',
        'DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu',
      ],
      kt: '2',
    } as IdentifierAndKeys;
    const generated = generateDocument(
      controllerDid,
      controller,
      delegatorDid,
      delegator
    );
    const expected = multiSigDelegateMultiSig;
    const result = didDocsAreEqual(generated, expected);
    console.log('Generated DID Document:', JSON.stringify(generated, null, 2));
    console.log('Expected DID Document:', JSON.stringify(expected, null, 2));
    expect(result).toBe(true);
  });
});
