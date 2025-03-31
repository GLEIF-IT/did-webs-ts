import { Validator } from 'jsonschema';
import { ecrVleiCredentialSchema } from './schemas/ecrVleiCredentialSchema.js';

export const isValidEcrVleiCredential = (data: object): boolean =>
  new Validator().validate(data, ecrVleiCredentialSchema).valid;
