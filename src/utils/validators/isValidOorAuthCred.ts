import { Validator } from 'jsonschema';
import { oorAuthCredSchema } from './schemas/oorAuthCredSchema.js';

export const isValidOorAuthCred = (data: object): boolean =>
  new Validator().validate(data, oorAuthCredSchema).valid;
