import { Validator } from 'jsonschema';
import { leEcrLeCredSchema } from './schemas/leEcrLeCredSchema.js';

export const isValidLeEcrLeCred = (data: object): boolean =>
  new Validator().validate(data, leEcrLeCredSchema).valid;
