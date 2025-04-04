import { z } from 'zod';

export interface EXN {
  v: string;
  t: 'exn';
  d: string;
  i: string;
  ri: string;
  x: string;
  p: string;
  dt: string;
  r: string;
  q: object;
  a: {
    msg: string;
  };
}

export const EXNSchema = z.object({
  v: z.string(),
  t: z.literal('exn'),
  d: z.string(),
  i: z.string(),
  ri: z.string(),
  x: z.string(),
  p: z.string(),
  dt: z.string(),
  r: z.string(),
  q: z.object({}).passthrough(),
  a: z.object({
    msg: z.string(),
  }),
});
