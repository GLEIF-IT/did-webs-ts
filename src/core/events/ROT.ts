import { z } from 'zod';

export interface ROT {
  v: string;
  t: 'rot';
  d: string;
  i: string;
  s: string;
  p: string;
  kt: string;
  k: string[];
  nt: string;
  n: string[];
  bt: string;
  br: string[];
  ba: string[];
  c: string[];
  a: string[];
}

export const ROTSchema = z.object({
  v: z.string(),
  t: z.literal('rot'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
  p: z.string(),
  kt: z.string(),
  k: z.array(z.string()),
  nt: z.string(),
  n: z.array(z.string()),
  bt: z.string(),
  br: z.array(z.string()),
  ba: z.array(z.string()),
  c: z.array(z.string()),
  a: z.array(z.string()),
});
