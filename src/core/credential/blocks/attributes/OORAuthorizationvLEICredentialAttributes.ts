import { BaseAttributes } from '../base/BaseAttributes.js';

export interface OORAuthorizationvLEICredentialAttributes
  extends BaseAttributes {
  AID: string;
  personLegalName: string;
  officialRole: string;
}
