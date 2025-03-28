/* eslint-disable @typescript-eslint/no-require-imports */
const vleiToDidWebs = require('@futureforg-ing/vlei-to-did-webs');
const cred = require('../../cred.js').default;
/* eslint-enable @typescript-eslint/no-require-imports */

console.log('\n\x1b[34m************');
console.log('* CommonJS *');
console.log('************\x1b[0m\n\n');

const { d: aid } = cred;
const credential = JSON.stringify(cred);

console.log(
  vleiToDidWebs.getDidWebs('example.com', credential, '/dids', 8080) ===
    `did:webs:example.com%3A8080:dids:${aid}`
    ? '\x1b[32m[x] OK\x1b[0m'
    : '\x1b[31m[x] FAIL\x1b[0m'
);
