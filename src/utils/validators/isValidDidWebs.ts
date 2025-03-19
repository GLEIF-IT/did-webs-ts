import { isValidHost } from './isValidHost.js';
import { isValidAid } from './isValidAid.js';

export const isValidDidWebs = (input: string): boolean =>
  new RegExp(
    '^did:webs:' +
      '([a-zA-Z0-9.-]+)' + // Host (simplified domain representation)
      '(%3A[0-9]{1,5})?' + // Optional port with percent-encoded colon
      '(:[a-zA-Z0-9-_~./]+)*' + // Zero or more path segments
      ':([a-zA-Z0-9+/=]+)$' // AID as base64
  ).test(input) &&
  isValidHost(extractHost(input) ?? '') &&
  isValidAid(extractAid(input) ?? ''); // Validate host

const extractHost = (didWebs: string): string | null => {
  const match = didWebs.match(/^did:webs:([^:%3A]+)/);
  return match ? match[1] : null;
};

const extractAid = (didWebs: string): string | null =>
  didWebs.length >= 44 ? didWebs.slice(-44) : null;
