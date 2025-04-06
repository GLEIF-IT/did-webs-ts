import { z } from 'zod';
export interface PRO {
  v: string;
  t: 'pro';
  d: string;
  i: string;
  dt: string;
  r: string;
  rr: string;
  q: {
    d: string;
    i: string;
    s: string;
    ri: string;
    dd: string;
  };
}

export const PROSchema = z.object({
  v: z.string(),
  t: z.literal('pro'),
  d: z.string(),
  i: z.string(),
  dt: z.string(),
  r: z.string(),
  rr: z.string(),
  q: z.object({
    d: z.string(),
    i: z.string(),
    s: z.string(),
    ri: z.string(),
    dd: z.string(),
  }),
});
