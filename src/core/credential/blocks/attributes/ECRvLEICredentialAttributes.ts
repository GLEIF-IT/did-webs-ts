import { BaseAttributes } from '../base/BaseAttributes.js';

export interface ECRvLEICredentialAttributes extends BaseAttributes {
  u?: string;
  personLegalName: string;
  engagementContextRole: string;
}
