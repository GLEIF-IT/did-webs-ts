import { Validator } from 'jsonschema';
import { oorAuthorizationVleiCredentialSchema } from './schemas/oorAuthorizationVleiCredentialSchema.js';

export const isValidOorAuthorizationVleiCredential = (data: object): boolean =>
  new Validator().validate(data, oorAuthorizationVleiCredentialSchema).valid;
