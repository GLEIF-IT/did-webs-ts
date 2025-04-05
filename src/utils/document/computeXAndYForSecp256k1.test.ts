import { computeXAndYForSecp256k1 } from './computeXAndYForSecp256k1.js';

describe('computeAandYForSecp256k1', () => {
  it('should compute x and y coordinates correctly...', () => {
    // Compressed key for the secp256k1 generator (private key = 1)
    const compressedKey = 'Anm-Zm76dy6xVaAmlezocLHAKb-zLLzcopyXygUbFvh5';
    const expectedX = 'eb5mbvp3LrFVoCaV7OhwscApv7MsvNyinJfKBRsW-Hk';
    const expectedY = 'TRT_GpKmf3C1o1-tCRLW-L41I4IqfT1KtrVIRVeXeMQ';

    const result = computeXAndYForSecp256k1(compressedKey);

    expect(result.x).toEqual(expectedX);
    expect(result.y).toEqual(expectedY);
  });

  it('should compute x and y coordinates correctly...', () => {
    const compressedKey = 'AsYEf5RHet1tMEVEBpcHzYFq4xtbUNOHEuDqevjltLbE';
    const expectedX = 'xgR_lEd63W0wRUQGlwfNgWrjG1tQ04cS4Op6-OW0tsQ';
    const expectedY = 'wz9Jhz3UJFNBXQXHoXnbE5cO0G4xvVs185tOFp7ICeI';

    const result = computeXAndYForSecp256k1(compressedKey);

    expect(result.x).toEqual(expectedX);
    expect(result.y).toEqual(expectedY);
  });
});
