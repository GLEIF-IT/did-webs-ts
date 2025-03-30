import { LEEdges } from './edges/LEEdges.js';
import { ECRAuthorizationvLEICredentialRules } from './rules/ECRAuthorizationvLEICredentialRules.js';
import { ECRAuthorizationvLEICredentialAttributes } from './attributes/ECRAuthorizationvLEICredentialAttributes.js';
import { BaseCredential } from './base/BaseCredential.js';

// Diagram #4

export interface ECRAuthorizationvLEICredential extends BaseCredential {
  a?: string | ECRAuthorizationvLEICredentialAttributes;
  e: string | LEEdges;
  r: string | ECRAuthorizationvLEICredentialRules;
}
