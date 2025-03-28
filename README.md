# vlei-to-did-webs

Derives a well-formed `did:webs` identifier from a [vLEI](https://www.gleif.org/en/vlei/introducing-the-verifiable-lei-vlei) credential.

## Usage

```bash
npm install @futureforg-ing/vlei-to-did-webs
```

then:

```javascript
const vtdws = require('@futureforg-ing/vlei-to-did-webs');
```

or

```javascript
import * as vtdws from '@futureforg-ing/vlei-to-did-webs';
```

## API

The API has a single function called `getDidWebs()`. It takes a hostname as a string, a vLEI as a JSON string, and an optional path and port number. It returns a well-formed `did:webs` identifier as a string.

### Example

```javascript
import * as vtdws from '@futureforg-ing/vlei-to-did-webs';

const hostname = 'example.com';

const credentialObject = {
  v: 'ACDC10JSON000197_',
  d: 'EGzSw02-7TdWJtL4YqYQQ7VO7GN6GG-CLY-aZ-rUJQkD',
  i: 'EFGDbi1kexM1ccTA_YSvTo9yW2eGx9BD6lmNNP5O-1Uo', // the entity aid; makes up part of did:webs
  ri: 'EEXgzOfJCdsHpcTfkzuvT9wZStOAH72KwZVNyMyXAgMj',
  s: 'EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao',
  a: {
    d: 'Ea4ny_YZAtAGUwGSyH7iFiKjpM3yFiDHcjrdomqt7Ryk',
    i: 'did:keri:EP2ukuiw_0xcp943NWz4IRnNtxwx7rzROwV1D_ZRP0XQ',
    dt: '2021-06-09T17:35:54.169967+00:00',
    LEI: '5493001KJTIIGC8Y1R12',
  },
  r: {
    d: 'EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU',
    usageDisclaimer: {
      l: 'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.',
    },
    issuanceDisclaimer: {
      l: 'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.',
    },
  },
};
const credentialString = JSON.stringify(credentialObject);

const path = '/path/to/dids';

const port = 8080;

const did = vtdws.getDidWebs(hostname, credentialString, path, port);

console.log(did); // did:webs:example.com%3A8080:path/to/dids/EFGDbi1kexM1ccTA_YSvTo9yW2eGx9BD6lmNNP5O-1Uo
```
