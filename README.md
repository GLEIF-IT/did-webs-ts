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

## API

The API has a single function called `composeDidWebs()`. It takes a hostname as a string, an AID as a string, and an optional path and port number. It returns a well-formed `did:webs` identifier as a string.

### Example

```javascript
import * as didWebs from '@gleif-it/did-webs-ts';

const hostname = 'example.com';

const aid = 'EFGDbi1kexM1ccTA_YSvTo9yW2eGx9BD6lmNNP5O-1Uo'; // in reality, will likely come from a CESR stream or similar KERI construct

const path = '/path/to/dids';

const port = 8080;

const did = didWebs.composeDidWebs(hostname, aid, path, port);

console.log(did); // did:webs:example.com%3A8080:path/to/dids/EFGDbi1kexM1ccTA_YSvTo9yW2eGx9BD6lmNNP5O-1Uo
```
