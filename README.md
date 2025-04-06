# did-webs-ts

Derives a well-formed `did:webs` identifier from a KERI event data.

## Usage

```bash
npm install @gleif-it/did-webs-ts
```

then:

```javascript
const didWebs = require('@gleif-it/did-webs-ts');
```

or

```javascript
import * as didWebs from '@gleif-it/did-webs-ts';
```

or

```javascript
import { composeDid, publishDid } from '@gleif-it/did-webs-ts';
```

## API

The API has two functions, `composeDid()` and `publishDid()`

The first, `composeDid()`, takes a hostname and an AID as strings, along with an optional path and port number. It returns a well-formed `did:webs` identifier as a string.

The second, `publishDid()`, takes a CESR-encoded Key Event Log and a configuration object containing endpoint information and returns a tuple containing a well-formed DID document (`did.json`), the original KEL (`keri.cesr`), and the `did:webs` identifier.

### Example

#### composeDid()

```javascript
import * as didWebs from '@gleif-it/did-webs-ts';

const hostname = 'example.com';

const aid = 'EFGDbi1kexM1ccTA_YSvTo9yW2eGx9BD6lmNNP5O-1Uo'; // in reality, will likely come from a CESR stream or similar KERI construct

const path = '/path/to/dids';

const port = 8080;

const did = didWebs.composeDidWebs(hostname, aid, path, port);

console.log(did); // did:webs:example.com%3A8080:path/to/dids/EFGDbi1kexM1ccTA_YSvTo9yW2eGx9BD6lmNNP5O-1Uo
```

#### publishDid()

```javascript
import * as didWebs from '@gleif-it/did-webs-ts';

const cesr = '[YOUR CESR-ENCODED KEL FROM WHEREVER YOU GET IT...]';

const config = {
  host: 'example.com',
  port: 8080,
  path: '/identity/did',
};

const [didJson, keriCesr, did] = didWebs.publishDid(cesr, config);

console.log(didJson); // the DID document as an JSON object
console.log(keriCesr); // cesr
console.log(did); // did:webs:example.com%3A8080:identity:did:[THE CONTROLLER AID DISCOVERED FROM THE KEL]
```
