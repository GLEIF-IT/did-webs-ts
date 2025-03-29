import { Validator } from 'jsonschema';
import { leOorCredSchema } from './schemas/leOorCredSchema.js';

export const isValidLeOorCred = (data: object): boolean =>
  new Validator().validate(data, leOorCredSchema).valid;
