import * as didWebs from '@gleif-it/did-webs-ts';
import { composeDidWebs } from '@gleif-it/did-webs-ts';

console.log('\n\x1b[34m**************');
console.log('* EcmaScript *');
console.log('**************\x1b[0m\n\n');

const did = `did:webs:example.com%3A8080:dids:EmkPreYpZfFk66jpf3uFv7vklXKhzBrAqjsKAn2EDIPM`;

console.log(
  // check default export
  didWebs.composeDidWebs(
    'example.com',
    'EmkPreYpZfFk66jpf3uFv7vklXKhzBrAqjsKAn2EDIPM',
    '/dids',
    8080
  ) === did &&
    // check named export
    composeDidWebs(
      'example.com',
      'EmkPreYpZfFk66jpf3uFv7vklXKhzBrAqjsKAn2EDIPM',
      '/dids',
      8080
    ) === did
    ? '\x1b[32m[x] OK\x1b[0m'
    : '\x1b[31m[x] FAIL\x1b[0m'
);
