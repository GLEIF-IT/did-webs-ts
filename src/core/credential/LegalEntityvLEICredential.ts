import { LegalEntityvLEICredentialEdges } from './edges/LegalEntityvLEICredentialEdges.js';
import { LegalEntityvLEICredentialRules } from './rules/LegalEntityvLEICredentialRules.js';
import { LegalEntityvLEICredentialAttributes } from './attributes/LegalEntityvLEICredentialAttributes.js';
import { BaseCredential } from './base/BaseCredential.js';

// Diagram #2

export interface LegalEntityvLEICredential extends BaseCredential {
  a?: string | LegalEntityvLEICredentialAttributes;
  e: string | LegalEntityvLEICredentialEdges;
  r: string | LegalEntityvLEICredentialRules;
}
