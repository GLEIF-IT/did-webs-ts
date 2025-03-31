import { Validator } from 'jsonschema';
import { leOorCredSchema } from './schemas/leOorCredSchema.js';

export const isValidOorVleiCredential = (data: object): boolean =>
  new Validator().validate(data, leOorCredSchema).valid;
