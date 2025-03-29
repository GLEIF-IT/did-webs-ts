import { Validator } from 'jsonschema';
import { qviCredSchema } from './schemas/qviCredSchema.js';

export const isValidQviCred = (data: object): boolean =>
  new Validator().validate(data, qviCredSchema).valid;
