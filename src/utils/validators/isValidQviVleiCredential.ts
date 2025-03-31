import { Validator } from 'jsonschema';
import { qviVleiCredentialSchema } from './schemas/qviVleiCredentialSchema.js';

export const isValidQviVleiCredential = (data: object): boolean =>
  new Validator().validate(data, qviVleiCredentialSchema).valid;
