import { LEEdges } from '../blocks/edges/LEEdges.js';
import { ECRAuthorizationvLEICredentialRules } from '../blocks/rules/ECRAuthorizationvLEICredentialRules.js';
import { ECRAuthorizationvLEICredentialAttributes } from '../blocks/attributes/ECRAuthorizationvLEICredentialAttributes.js';
import { BaseCredential } from '../blocks/base/BaseCredential.js';

// Diagram #4

export interface ECRAuthorizationvLEICredential extends BaseCredential {
  a?: string | ECRAuthorizationvLEICredentialAttributes;
  e: string | LEEdges;
  r: string | ECRAuthorizationvLEICredentialRules;
}
