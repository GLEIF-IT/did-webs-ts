import Ajv from 'ajv';

import { didCoreSchema } from './schemas/didCoreSchema.js';

export const isValidDidDocument = (data: object): boolean => {
  const ajv = new Ajv();
  const validate = ajv.compile(didCoreSchema);
  return validate(data);
};
