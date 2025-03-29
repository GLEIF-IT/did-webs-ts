import { Validator } from 'jsonschema';
import { leEcrAuthCredSchema } from './schemas/leEcrAuthCredSchema.js';

export const isValidLeEcrAuthCred = (data: object): boolean =>
  new Validator().validate(data, leEcrAuthCredSchema).valid;
