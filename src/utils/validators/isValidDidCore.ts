import { Validator } from 'jsonschema';

import { didCoreSchema } from './schemas/didCoreSchema.js';

export const isValidDidCore = (data: object): boolean =>
  new Validator().validate(data, didCoreSchema).valid;
