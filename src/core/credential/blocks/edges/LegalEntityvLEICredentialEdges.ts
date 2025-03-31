import { BaseEdges } from '../base/BaseEdges.js';

// --- Credential-Specific Edges (Denormalized) ---
// For LegalEntityvLEICredential, the edges includes a "qvi" field.

export interface LegalEntityvLEICredentialEdges extends BaseEdges {
  qvi: {
    n: string;
    s: 'EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao';
  };
}
