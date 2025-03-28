import { makeDidWebs } from './makeDidWebs.js';
import { qviCred } from '../../test/data/creds/qviCred.js';
import { leCred } from '../../test/data/creds/leCred.js';

describe('makeDidWebs', () => {
  it('should return the correct value', () => {
    expect(makeDidWebs('example.com', JSON.stringify(qviCred))).toBe(
      'did:webs:example.com:EYo4R9I08Et5H5SWKG8ZMS83r8FmRtfahN0V9NbG9zdw'
    );
  });
  it('should return the correct value again', () => {
    expect(makeDidWebs('example.com', JSON.stringify(leCred))).toBe(
      'did:webs:example.com:EBdXt3gIXOf2BBWNHdSXCJnFJL5OuQPyM5K0neuniccM'
    );
  });
});
