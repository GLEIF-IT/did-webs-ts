import { isValidDidWebs } from './isValidDidWebs.js';

describe('isValidDidWebs', () => {
  it('should successfully validate well-formed did:webs identifiers', () => {
    // add tests as needed
    expect(
      isValidDidWebs(
        'did:webs:test.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(true);
    expect(
      isValidDidWebs(
        'did:webs:example.com%3A8080:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(true);
    expect(
      isValidDidWebs(
        'did:webs:example.com:path:to:resource:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(true);
  });
  it('should reject invalid did:webs identifiers', () => {
    // add tests as needed
    expect(isValidDidWebs('did:webs:example.com')).toBe(false);
    expect(isValidDidWebs('did:webs:example.com:')).toBe(false);
    expect(
      isValidDidWebs(
        'did:webs:example.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2:'
      )
    ).toBe(false);
    expect(
      isValidDidWebs(
        'did:webs:example.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2:invalid:'
      )
    ).toBe(false);
    expect(
      isValidDidWebs(
        'did:webs:example.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2:invalid:aid:'
      )
    ).toBe(false);
    expect(
      isValidDidWebs('did:webs:example.com:1234:invalid:aid:invalid:')
    ).toBe(false);
    expect(isValidDidWebs('EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2')).toBe(
      false
    );
    expect(isValidDidWebs(':path:to:resource')).toBe(false);
    expect(
      isValidDidWebs(
        'did:webs:this-is-the-host:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(false);
    expect(
      isValidDidWebs(
        'did:webs:example.com%3A67000:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(false);
    expect(
      isValidDidWebs(
        'did:webs:-invalid.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(false); // host cannot start with '-'

    expect(
      isValidDidWebs(
        'did:webs:invalid-.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(false); // host cannot end with '-'

    expect(
      isValidDidWebs(
        'did:webs:example..com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(false); // no consecutive dots in host

    expect(
      isValidDidWebs(
        'did:webs:.example.com:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(false); // host cannot start with a dot

    expect(
      isValidDidWebs(
        'did:webs:example.com.:EGZiuJbg73lpE9WFD7bUBIJviAkdU4pSabMbX8DhlHW2'
      )
    ).toBe(false); // host cannot end with a dot
  });
});
