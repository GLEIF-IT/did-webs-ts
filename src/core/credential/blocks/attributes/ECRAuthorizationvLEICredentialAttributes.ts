import { BaseAttributes } from '../base/BaseAttributes.js';

export interface ECRAuthorizationvLEICredentialAttributes
  extends BaseAttributes {
  AID: string;
  personLegalName: string;
  engagementContextRole: string;
}
