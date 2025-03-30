import { BaseRules } from '../base/BaseRules.js';

// ECR and Legal Entity Engagement rules require a privacy disclaimer

export type ECRAuthorizationvLEICredentialRules = BaseRules & {
  privacyDisclaimer: { l: string };
};
