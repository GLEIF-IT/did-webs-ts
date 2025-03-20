export const isValidDidWebs = (input: string): boolean =>
  new RegExp(
    '^did:webs:' +
      '((?!-)[a-zA-Z0-9-]{1,63}(?<!-)\\.(?:[a-zA-Z]{2,63}|xn--[a-zA-Z0-9]+))' + // Legal hostname as per RFC 1035 & 1123
      '(?:%3A(0|[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|6553[0-5]))?' + // Valid port range: 0-65535
      "(?::([a-zA-Z0-9-._~!$&'()*+,;=]+))*" + // Zero or more path segments
      ':(E[A-Za-z0-9-_]{43})$' // AID must start with 'E', be Base64URL, and be exactly 44 characters long
  ).test(input);
