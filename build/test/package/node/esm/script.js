import * as vleiToDidWebs from '@futureforg-ing/vlei-to-did-webs';
import { getDidWebs } from '@futureforg-ing/vlei-to-did-webs';

import cred from '../../cred.js';

console.log('\n\x1b[34m**************');
console.log('* EcmaScript *');
console.log('**************\x1b[0m\n\n');

const didWebs = `did:webs:example.com%3A8080:dids:${cred.i}`;

console.log(
  // check default export
  vleiToDidWebs.getDidWebs('example.com', cred, '/dids', 8080) === didWebs &&
    // check named export
    getDidWebs('example.com', cred, '/dids', 8080) === didWebs
    ? '\x1b[32m[x] OK\x1b[0m'
    : '\x1b[31m[x] FAIL\x1b[0m'
);
