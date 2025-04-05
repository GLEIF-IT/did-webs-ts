import { Aid } from '../../core/Aid.js';
import { Did } from '../../core/Did.js';
import { Key } from '../../core/Key.js';

// currently this all gets tested in the generateDocument function
export const generateIdTypeControllerBlock = (
  identifier: Aid | Key,
  type: 'ConditionalProof2022' | 'JsonWebKey2020',
  controller: Did
): { id: Aid; type: string; controller: Did } => ({
  id: `#${identifier}` as Aid,
  type,
  controller,
});
