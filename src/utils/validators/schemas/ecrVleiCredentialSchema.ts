export const ecrVleiCredentialSchema = {
  $id: 'EEy9PkikFcANV1l7EHukCeXqrzT1hNZjGlUk7wuMO5jw',
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Legal Entity Engagement Context Role vLEI Credential',
  description:
    'A vLEI Role Credential issued to representatives of a Legal Entity in other than official roles but in functional or other context of engagement',
  type: 'object',
  credentialType: 'LegalEntityEngagementContextRolevLEICredential',
  version: '1.0.0',
  properties: {
    v: {
      description: 'Version',
      type: 'string',
    },
    d: {
      description: 'Credential SAID',
      type: 'string',
    },
    u: {
      description: 'A salty nonce',
      type: 'string',
    },
    i: {
      description: 'QVI or LE Issuer AID',
      type: 'string',
    },
    ri: {
      description: 'Credential status registry',
      type: 'string',
    },
    s: {
      description: 'Schema SAID',
      type: 'string',
    },
    a: {
      oneOf: [
        {
          description: 'Attributes block SAID',
          type: 'string',
        },
        {
          $id: 'EDv4wiOMHE125CXu-EuOd0YRXz-AgpLilJfjoODFqtHD',
          description: 'Attributes block',
          type: 'object',
          properties: {
            d: {
              description: 'Attributes block SAID',
              type: 'string',
            },
            u: {
              description: 'A salty nonce',
              type: 'string',
            },
            i: {
              description: 'Person Issuee AID',
              type: 'string',
            },
            dt: {
              description: 'Issuance date time',
              type: 'string',
              format: 'date-time',
            },
            LEI: {
              description: 'LEI of the Legal Entity',
              type: 'string',
              format: 'ISO 17442',
            },
            personLegalName: {
              description:
                'Recipient name as provided during identity assurance',
              type: 'string',
            },
            engagementContextRole: {
              description: "Role description i.e. 'Head of Standards'",
              type: 'string',
            },
          },
          additionalProperties: false,
          required: [
            'i',
            'dt',
            'LEI',
            'personLegalName',
            'engagementContextRole',
          ],
        },
      ],
    },
    e: {
      oneOf: [
        {
          description: 'Edges block SAID',
          type: 'string',
        },
        {
          $id: 'EEM9OvWMEmAfAY0BV2kXatSc8WM13QW1B5y33E8z4f33',
          description: 'Edges block',
          type: 'object',
          properties: {
            d: {
              description: 'Edges block SAID',
              type: 'string',
            },
            auth: {
              description: 'Chain to Auth vLEI credential from legal entity',
              type: 'object',
              properties: {
                n: {
                  description: 'SAID of the ACDC to which the edge connects',
                  type: 'string',
                },
                s: {
                  description:
                    'SAID of required schema of the credential pointed to by this node',
                  type: 'string',
                  const: 'EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g',
                },
                o: {
                  description: 'Operator indicating this node is the issuer',
                  type: 'string',
                  const: 'I2I',
                },
              },
              additionalProperties: false,
              required: ['n', 's', 'o'],
            },
          },
          additionalProperties: false,
          required: ['d', 'auth'],
        },
        {
          $id: 'EHeZGaLBhCc_-sAcyAEgFFeCkxgnqCubPOBuEvoh9jHX',
          description: 'Edges block for issuance from Legal Entity',
          type: 'object',
          properties: {
            d: {
              description: 'SAID of edges block',
              type: 'string',
            },
            le: {
              description: 'Chain to legal entity vLEI credential',
              type: 'object',
              properties: {
                n: {
                  description: 'SAID of the ACDC to which the edge connects',
                  type: 'string',
                },
                s: {
                  description:
                    'SAID of required schema of the credential pointed to by this node',
                  type: 'string',
                  const: 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY',
                },
              },
              additionalProperties: false,
              required: ['n', 's'],
            },
          },
          additionalProperties: false,
          required: ['d', 'le'],
        },
      ],
    },
    r: {
      oneOf: [
        {
          description: 'Rules block SAID',
          type: 'string',
        },
        {
          $id: 'EEBm6OIpem19B8BzxWXOAuzKTtYeutGpXMLW9o3pAuRe',
          description: 'Rules block',
          type: 'object',
          properties: {
            d: {
              description: 'Rules block SAID',
              type: 'string',
            },
            usageDisclaimer: {
              description: 'Usage Disclaimer',
              type: 'object',
              properties: {
                l: {
                  description: 'Associated legal language',
                  type: 'string',
                  const:
                    'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.',
                },
              },
            },
            issuanceDisclaimer: {
              description: 'Issuance Disclaimer',
              type: 'object',
              properties: {
                l: {
                  description: 'Associated legal language',
                  type: 'string',
                  const:
                    'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.',
                },
              },
            },
            privacyDisclaimer: {
              description: 'Privacy Disclaimer',
              type: 'object',
              properties: {
                l: {
                  description: 'Associated legal language',
                  type: 'string',
                  const:
                    'It is the sole responsibility of Holders as Issuees of an ECR vLEI Credential to present that Credential in a privacy-preserving manner using the mechanisms provided in the Issuance and Presentation Exchange (IPEX) protocol specification and the Authentic Chained Data Container (ACDC) specification. https://github.com/WebOfTrust/IETF-IPEX and https://github.com/trustoverip/tswg-acdc-specification.',
                },
              },
            },
          },
          additionalProperties: false,
          required: [
            'd',
            'usageDisclaimer',
            'issuanceDisclaimer',
            'privacyDisclaimer',
          ],
        },
      ],
    },
  },
  additionalProperties: false,
  required: ['v', 'u', 'i', 'ri', 's', 'd', 'r', 'a', 'e'],
};
