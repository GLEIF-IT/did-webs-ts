import { constructDidWebs } from './constructDidWebs';

describe('constructDidWebs', () => {
  it('should be a function', () => {
    expect(constructDidWebs).toBeInstanceOf(Function);
  });

  it('should take two arguments', () => {
    expect(constructDidWebs.length).toBe(2);
  });

  it('should construct a proper did:webs string', () => {
    expect(constructDidWebs('example.com', '1234')).toBe(
      'did:webs:example.com:1234'
    );
    expect(
      constructDidWebs(
        'test.com',
        'EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe('did:webs:test.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2');
  });

  it('should percent encode colons indicating ports', () => {
    expect(constructDidWebs('example.com:8080', '1234')).toBe(
      'did:webs:example.com%3A8080:1234'
    );
  });

  it('should replace slashes in paths with colons', () => {
    expect(constructDidWebs('example.com/path/to/resource', '1234')).toBe(
      'did:webs:example.com:path:to:resource:1234'
    );
  });
});
