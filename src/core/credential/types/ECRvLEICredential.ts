import { ECRvLEICredentialEdgesLE } from '../blocks/edges/ECRvLEICredentialEdgesLE.js';
import { ECRvLEICredentialEdgesAuth } from '../blocks/edges/ECRvLEICredentialEdgesAuth.js';
import { ECRvLEICredentialRules } from '../blocks/rules/ECRvLEICredentialRules.js';
import { ECRvLEICredentialAttributes } from '../blocks/attributes/ECRvLEICredentialAttributes.js';
import { BaseCredential } from '../blocks/base/BaseCredential.js';

// Diagram #6

export interface ECRvLEICredential extends BaseCredential {
  a: string | ECRvLEICredentialAttributes;
  e: string | ECRvLEICredentialEdgesAuth | ECRvLEICredentialEdgesLE;
  r: string | ECRvLEICredentialRules;
}
