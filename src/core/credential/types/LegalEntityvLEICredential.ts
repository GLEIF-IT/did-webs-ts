import { LegalEntityvLEICredentialEdges } from '../blocks/edges/LegalEntityvLEICredentialEdges.js';
import { LegalEntityvLEICredentialRules } from '../blocks/rules/LegalEntityvLEICredentialRules.js';
import { LegalEntityvLEICredentialAttributes } from '../blocks/attributes/LegalEntityvLEICredentialAttributes.js';
import { BaseCredential } from '../blocks/base/BaseCredential.js';

// Diagram #2

export interface LegalEntityvLEICredential extends BaseCredential {
  a?: string | LegalEntityvLEICredentialAttributes;
  e: string | LegalEntityvLEICredentialEdges;
  r: string | LegalEntityvLEICredentialRules;
}
