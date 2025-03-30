import { ECRvLEICredentialEdgesLE } from './edges/ECRvLEICredentialEdgesLE.js';
import { ECRvLEICredentialEdgesAuth } from './edges/ECRvLEICredentialEdgesAuth.js';
import { ECRvLEICredentialRules } from './rules/ECRvLEICredentialRules.js';
import { ECRvLEICredentialAttributes } from './attributes/ECRvLEICredentialAttributes.js';
import { BaseCredential } from './base/BaseCredential.js';

// Diagram #6

export interface ECRvLEICredential extends BaseCredential {
  a: string | ECRvLEICredentialAttributes;
  e: string | ECRvLEICredentialEdgesAuth | ECRvLEICredentialEdgesLE;
  r: string | ECRvLEICredentialRules;
}
