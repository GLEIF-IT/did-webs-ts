import { Validator } from 'jsonschema';
import { ecrAuthorizationVleiCredentialSchema } from './schemas/ecrAuthorizationVleiCredentialSchema.js';

export const isValidEcrAuthorizationVleiCredential = (data: object): boolean =>
  new Validator().validate(data, ecrAuthorizationVleiCredentialSchema).valid;
