import { OORvLEICredentialEdges } from '../blocks/edges/OORvLEICredentialEdges.js';
import { OORvLEICredentialRules } from '../blocks/rules/OORvLEICredentialRules.js';
import { OORvLEICredentialAttributes } from '../blocks/attributes/OORvLEICredentialAttributes.js';
import { BaseCredential } from '../blocks/base/BaseCredential.js';

// Diagram #5

export interface OORvLEICredential extends BaseCredential {
  a: string | OORvLEICredentialAttributes;
  e: string | OORvLEICredentialEdges;
  r: string | OORvLEICredentialRules;
}
