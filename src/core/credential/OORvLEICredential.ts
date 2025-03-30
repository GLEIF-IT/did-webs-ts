import { OORvLEICredentialEdges } from './edges/OORvLEICredentialEdges.js';
import { OORvLEICredentialRules } from './rules/OORvLEICredentialRules.js';
import { OORvLEICredentialAttributes } from './attributes/OORvLEICredentialAttributes.js';
import { BaseCredential } from './base/BaseCredential.js';

// Diagram #5

export interface OORvLEICredential extends BaseCredential {
  a: string | OORvLEICredentialAttributes;
  e: string | OORvLEICredentialEdges;
  r: string | OORvLEICredentialRules;
}
