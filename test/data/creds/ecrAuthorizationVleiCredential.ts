const ecrAuthorizationVleiCredential = {
  v: 'ACDC10JSON00011c_',
  d: 'EpcEvrX2gGTpmKbIG25GSA7_LsWwwzVQ6aUilgBubpGI',
  u: 'IY7-g7wTfta1087YAdUXTbuI0Vklqt8pQxTgc3Rtz0o',
  i: 'EmSIYYxvgtKn9jAp8GcK3fXOwTeyBIcAnRnyrLNfKjVI',
  ri: 'EymRy7xMwsxUelUauaXtMxTfPAMPAI6FkekwlOjkggt',
  s: 'EZdaE1HCu2ZhyIhpXTWfGSLS2kirKexaC-4up3sIUz1I',
  a: {
    d: 'EG7PfBZbyXS0huxbnvMD-jOdTnDCCaT4CO6xId-ATNWg',
    i: 'did:keri:EFs6d-7q-l6tDMn_yYFyFzaT89sSFNLCOaKqYMF-7L_0',
    dt: '2021-06-09T17:35:54.169967+00:00',
    AID: 'YourRecipientAIDHere', // Added required AID property
    LEI: '254900YH3ZCDPE1E5306',
    personLegalName: 'Anne Jones',
    engagementContextRole: 'Project Manager',
  },
  e: {
    d: 'EBDmgKOAEwnMGsofWg2m0l63J1awfJafqJyCzTnVkdSw',
    le: {
      n: 'Et2DOOu4ivLsjpv89vgv6auPntSLx4CvOhGUxMhxPS24',
      s: 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY', // Updated to match const value
    },
  },
  r: {
    d: 'EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU',
    usageDisclaimer: {
      l: 'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.',
    },
    issuanceDisclaimer: {
      l: 'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.',
    },
    privacyDisclaimer: {
      l: 'Privacy Considerations are applicable to QVI ECR AUTH vLEI Credentials.  It is the sole responsibility of QVIs as Issuees of QVI ECR AUTH vLEI Credentials to present these Credentials in a privacy-preserving manner using the mechanisms provided in the Issuance and Presentation Exchange (IPEX) protocol specification and the Authentic Chained Data Container (ACDC) specification.  https://github.com/WebOfTrust/IETF-IPEX and https://github.com/trustoverip/tswg-acdc-specification.',
    },
  },
};

export default ecrAuthorizationVleiCredential;
