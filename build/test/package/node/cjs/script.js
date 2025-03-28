const vleiToDidWebs = require('@futureforg-ing/vlei-to-did-webs');

console.log('\n\x1b[34m************');
console.log('* CommonJS *');
console.log('************\x1b[0m\n\n');

console.log(
  vleiToDidWebs.generateDidWebs(
    'example.com',
    'ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc',
    '/dids',
    8080
  ) ===
    'did:webs:example.com%3A8080:dids:ECwJlFWWcXQRwMDP80dmDgEO949AqKOSR2sTGFli9aSc'
    ? '\x1b[32m[x] OK\x1b[0m'
    : '\x1b[31m[x] FAIL\x1b[0m'
);
