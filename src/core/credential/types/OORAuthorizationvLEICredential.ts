import { LEEdges } from '../blocks/edges/LEEdges.js';
import { OORAuthorizationvLEICredentialRules } from '../blocks/rules/OORAuthorizationvLEICredentialRules.js';
import { OORAuthorizationvLEICredentialAttributes } from '../blocks/attributes/OORAuthorizationvLEICredentialAttributes.js';
import { BaseCredential } from '../blocks/base/BaseCredential.js';

// Diagram #3

export interface OORAuthorizationvLEICredential extends BaseCredential {
  a: string | OORAuthorizationvLEICredentialAttributes;
  e: string | LEEdges; // reusing LEEdges here
  r: string | OORAuthorizationvLEICredentialRules;
}
