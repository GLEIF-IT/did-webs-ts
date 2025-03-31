/* eslint-disable @typescript-eslint/no-require-imports */
const didWebs = require('@gleif-it/did-webs-ts');
/* eslint-enable @typescript-eslint/no-require-imports */

console.log('\n\x1b[34m************');
console.log('* CommonJS *');
console.log('************\x1b[0m\n\n');

console.log(
  didWebs.composeDidWebs(
    'example.com',
    'EmkPreYpZfFk66jpf3uFv7vklXKhzBrAqjsKAn2EDIPM',
    '/dids',
    8080
  ) ===
    `did:webs:example.com%3A8080:dids:EmkPreYpZfFk66jpf3uFv7vklXKhzBrAqjsKAn2EDIPM`
    ? '\x1b[32m[x] OK\x1b[0m'
    : '\x1b[31m[x] FAIL\x1b[0m'
);
