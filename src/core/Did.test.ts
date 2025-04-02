import { Did, createDid } from './Did.js';

describe('createDid', () => {
  it('should validate a string as a Did', () => {
    const did = createDid(
      'did:webs:example.com%3A8080:identity:artist:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M'
    );
    expect(did).toBe(
      'did:webs:example.com%3A8080:identity:artist:Ew-o5dU5WjDrxDBK4b4HrF82_rYb6MX6xsegjq4n0Y7M' as Did
    );
  });
  it('should throw an error for invalid Did', () => {
    expect(() => createDid('invalid_did')).toThrow('Invalid DID format');
  });
});
