import { ECRAuthorizationvLEICredential } from './ECRAuthorizationvLEICredential.js';
import { ECRvLEICredential } from './ECRvLEICredential.js';
import { LegalEntityvLEICredential } from './LegalEntityvLEICredential.js';
import { OORAuthorizationvLEICredential } from './OORAuthorizationvLEICredential.js';
import { OORvLEICredential } from './OORvLEICredential.js';
import { QVIvLEICredential } from './QVIvLEICredential.js';

export type Credential =
  | ECRAuthorizationvLEICredential
  | ECRvLEICredential
  | LegalEntityvLEICredential
  | OORAuthorizationvLEICredential
  | OORvLEICredential
  | QVIvLEICredential;
