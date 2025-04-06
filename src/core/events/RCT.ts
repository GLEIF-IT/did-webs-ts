import { z } from 'zod';

export interface RCT {
  v: string;
  t: 'rct';
  d: string;
  i: string;
  s: string;
}

export const RCTSchema = z.object({
  v: z.string(),
  t: z.literal('rct'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
});
