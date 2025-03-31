import { QVIvLEICredentialRules } from '../blocks/rules/QVIvLEICredentialRules.js';
import { QVIvLEICredentialAttributes } from '../blocks/attributes/QVIvLEICredentialAttributes.js';
import { BaseCredential } from '../blocks/base/BaseCredential.js';

// Diagram #1

export interface QVIvLEICredential extends BaseCredential {
  a?: string | QVIvLEICredentialAttributes;
  r?: string | QVIvLEICredentialRules;
}
