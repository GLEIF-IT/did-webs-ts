import { Validator } from 'jsonschema';
import { leCredSchema } from './schemas/leCredSchema.js';

export const isValidLeCred = (data: object): boolean =>
  new Validator().validate(data, leCredSchema).valid;
