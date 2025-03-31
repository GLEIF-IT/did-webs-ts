import { Validator } from 'jsonschema';
import { leVleiCredentialSchema } from './schemas/leVleiCredentialSchema.js';

export const isValidLeVleiCredential = (data: object): boolean =>
  new Validator().validate(data, leVleiCredentialSchema).valid;
