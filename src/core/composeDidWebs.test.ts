import { composeDidWebs } from './composeDidWebs.js';
import { isValidDidWebs } from '../utils/validators/isValidDidWebs.js';

describe('composeDidWebs', () => {
  const host = 'example.com';
  const aid = 'EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2';
  const path = '/path/to/resource';
  const port = 8080;
  it('should be a function', () => {
    expect(composeDidWebs).toBeInstanceOf(Function);
  });

  it('should take four arguments', () => {
    expect(composeDidWebs.length).toBe(2);
  });

  it('should construct a proper did:webs string', () => {
    expect(composeDidWebs(host, aid)).toBe(
      'did:webs:example.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
    );
    expect(
      composeDidWebs('test.com', 'ERtiuJbg73lpE0WFD7bUBIJviAkdU5pSabMbx8RhlHE3')
    ).toBe('did:webs:test.com:ERtiuJbg73lpE0WFD7bUBIJviAkdU5pSabMbx8RhlHE3');
  });

  it('should percent encode colons indicating ports', () => {
    expect(composeDidWebs(host, aid, '', port)).toBe(
      'did:webs:example.com%3A8080:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
    );
  });

  it('should replace slashes in paths with colons', () => {
    expect(composeDidWebs(host, aid, path)).toBe(
      'did:webs:example.com:path:to:resource:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
    );
  });
  it('should generate valid did:webs strings', () => {
    expect(isValidDidWebs(composeDidWebs(host, aid))).toBe(true);
  });
  it('should reject input missing host or aid', () => {
    expect(() => composeDidWebs('', aid)).toThrow();
    expect(() => composeDidWebs(host, '')).toThrow();
  });
});
