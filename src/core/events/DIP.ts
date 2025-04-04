import { z } from 'zod';

export interface DIP {
  v: string;
  t: 'dip';
  d: string;
  i: string;
  s: string;
  kt: string;
  k: string[];
  nt: string;
  n: string[];
  bt: string;
  b: string[];
  c: string[];
  a: string[];
  di: string;
}

export const DIPSchema = z.object({
  v: z.string(),
  t: z.literal('dip'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
  kt: z.string(),
  k: z.array(z.string()),
  nt: z.string(),
  n: z.array(z.string()),
  bt: z.string(),
  b: z.array(z.string()),
  c: z.array(z.string()),
  a: z.array(z.string()),
  di: z.string(),
});
