import { z } from 'zod';

export interface IXN {
  v: string;
  t: 'ixn';
  d: string;
  i: string;
  s: string;
  p: string;
  a: {
    d: string;
    i: string;
    s: string;
  }[];
}

export const IXNSchema = z.object({
  v: z.string(),
  t: z.literal('ixn'),
  d: z.string(),
  i: z.string(),
  s: z.string(),
  p: z.string(),
  a: z.array(
    z.object({
      d: z.string(),
      i: z.string(),
      s: z.string(),
    })
  ),
});
