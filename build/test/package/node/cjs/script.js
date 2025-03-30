/* eslint-disable @typescript-eslint/no-require-imports */
const vleiToDidWebs = require('@futureforg-ing/vlei-to-did-webs');
const cred = require('../../cred.js').default;
/* eslint-enable @typescript-eslint/no-require-imports */

console.log('\n\x1b[34m************');
console.log('* CommonJS *');
console.log('************\x1b[0m\n\n');

console.log(
  vleiToDidWebs.getDidWebs('example.com', cred, '/dids', 8080) ===
    `did:webs:example.com%3A8080:dids:${cred.i}`
    ? '\x1b[32m[x] OK\x1b[0m'
    : '\x1b[31m[x] FAIL\x1b[0m'
);
