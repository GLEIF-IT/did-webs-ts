import { QVIvLEICredentialRules } from './rules/QVIvLEICredentialRules.js';
import { QVIvLEICredentialAttributes } from './attributes/QVIvLEICredentialAttributes.js';
import { BaseCredential } from './base/BaseCredential.js';

// Diagram #1

export interface QVIvLEICredential extends BaseCredential {
  a?: string | QVIvLEICredentialAttributes;
  r?: string | QVIvLEICredentialRules;
}
