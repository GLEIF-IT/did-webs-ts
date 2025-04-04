import { z } from 'zod';

export interface DRT {
  v: string;
  t: 'drt';
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

export const DRTSchema = z.object({
  v: z.string(),
  t: z.literal('drt'),
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
