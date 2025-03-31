import { ECRAuthorizationvLEICredential } from './types/ECRAuthorizationvLEICredential.js';
import { ECRvLEICredential } from './types/ECRvLEICredential.js';
import { LegalEntityvLEICredential } from './types/LegalEntityvLEICredential.js';
import { OORAuthorizationvLEICredential } from './types/OORAuthorizationvLEICredential.js';
import { OORvLEICredential } from './types/OORvLEICredential.js';
import { QVIvLEICredential } from './types/QVIvLEICredential.js';

export type Credential =
  | ECRAuthorizationvLEICredential
  | ECRvLEICredential
  | LegalEntityvLEICredential
  | OORAuthorizationvLEICredential
  | OORvLEICredential
  | QVIvLEICredential;
