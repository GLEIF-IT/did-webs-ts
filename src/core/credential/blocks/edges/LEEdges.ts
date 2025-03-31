import { BaseEdges } from '../base/BaseEdges.js';

// For ECRAuthorizationvLEICredential and OORAuthorizationvLEICredential,
// the edges includes a "le" field.

export interface LEEdges extends BaseEdges {
  le: {
    n: string;
    s: 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY';
  };
}
