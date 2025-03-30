import { LEEdges } from './edges/LEEdges.js';
import { OORAuthorizationvLEICredentialRules } from './rules/OORAuthorizationvLEICredentialRules.js';
import { OORAuthorizationvLEICredentialAttributes } from './attributes/OORAuthorizationvLEICredentialAttributes.js';
import { BaseCredential } from './base/BaseCredential.js';

// Diagram #3

export interface OORAuthorizationvLEICredential extends BaseCredential {
  a: string | OORAuthorizationvLEICredentialAttributes;
  e: string | LEEdges; // reusing LEEdges here
  r: string | OORAuthorizationvLEICredentialRules;
}
