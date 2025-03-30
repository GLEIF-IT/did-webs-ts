// credentials.ts

// Base interfaces for common properties

export interface BaseCredential {
  v?: string;
  u?: string;
  d: string;
  i: string;
  ri: string;
  s: string;
}

export interface BaseAttributes {
  d?: string;
  i: string;
  dt: string; // ISO date-time string
  LEI: string; // Expected in ISO 17442 format
}

export interface BaseRules {
  d: string;
  usageDisclaimer: { l: string };
  issuanceDisclaimer: { l: string };
  privacyDisclaimer?: { l: string };
}

export interface BaseEdges {
  d: string;
}

// --- Credential-Specific Attributes ---

export type LegalEntityAttributes = BaseAttributes;

export interface ECRAttributes extends BaseAttributes {
  AID: string;
  personLegalName: string;
  engagementContextRole: string;
}

export interface LEEcrLeAttributes extends BaseAttributes {
  u?: string;
  personLegalName: string;
  engagementContextRole: string;
}

export interface LEOorAttributes extends BaseAttributes {
  personLegalName: string;
  officialRole: string;
}

export interface OORAuthAttributes extends BaseAttributes {
  AID: string;
  personLegalName: string;
  officialRole: string;
}

export interface QVICredAttributes extends BaseAttributes {
  gracePeriod?: number;
}

// --- Credential-Specific Rules ---

export type LegalEntityRules = BaseRules;
export type LEOorRules = BaseRules;
export type OORAuthRules = BaseRules;
export type QVICredRules = BaseRules;

// ECR and Legal Entity Engagement rules require a privacy disclaimer
export type ECRRules = BaseRules & { privacyDisclaimer: { l: string } };
export type LEEcrLeRules = BaseRules & { privacyDisclaimer: { l: string } };

// --- Credential-Specific Edges (Denormalized) ---

// For LegalEntityvLEICredential, the edges includes a "qvi" field.
export interface LegalEntityEdges extends BaseEdges {
  qvi: {
    n: string;
    s: 'EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao';
  };
}

// For ECRAuthorizationvLEICredential and OORAuthorizationvLEICredential,
// the edges includes a "le" field.
export interface LEEdges extends BaseEdges {
  le: {
    n: string;
    s: 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY';
  };
}

// For LegalEntityEngagementContextRolevLEICredential, the edges can be one of two shapes:
export interface LEEcrLeEdgesAuth extends BaseEdges {
  auth: {
    n: string;
    s: 'EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g';
    o: 'I2I';
  };
}

export interface LEEcrLeEdgesLE extends BaseEdges {
  le: {
    n: string;
    s: 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY';
  };
}

// For LegalEntityOfficialOrganizationalRolevLEICredential, the edges includes an "auth" field.
export interface LEOorEdgesAuth extends BaseEdges {
  auth: {
    n: string;
    s: 'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E';
    o: 'I2I';
  };
}

// Diagram #2
export interface LegalEntityvLEICredential extends BaseCredential {
  a?: string | LegalEntityAttributes;
  e: string | LegalEntityEdges;
  r: string | LegalEntityRules;
}

// Diagram #4
export interface ECRAuthorizationvLEICredential extends BaseCredential {
  a?: string | ECRAttributes;
  e: string | LEEdges;
  r: string | ECRRules;
}

// Diagram #6
export interface ECRvLEICredential extends BaseCredential {
  a: string | LEEcrLeAttributes;
  e: string | LEEcrLeEdgesAuth | LEEcrLeEdgesLE;
  r: string | LEEcrLeRules;
}

// Diagram #5
export interface OORvLEICredential extends BaseCredential {
  a: string | LEOorAttributes;
  e: string | LEOorEdgesAuth;
  r: string | LEOorRules;
}

// Diagram #3
export interface OORAuthorizationvLEICredential extends BaseCredential {
  a: string | OORAuthAttributes;
  e: string | LEEdges; // reusing LEEdges here
  r: string | OORAuthRules;
}

export interface QVIvLEICredential extends BaseCredential {
  a?: string | QVICredAttributes;
  r?: string | QVICredRules;
}
