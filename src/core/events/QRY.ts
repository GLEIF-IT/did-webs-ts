import { z } from 'zod';

export interface QRY {
  v: string;
  t: 'qry';
  d: string;
  i: string;
  dt: string;
  r: string;
  rr: string;
  q: {
    d: string;
    i: string;
    s: string;
    dt: string;
  };
}

export const QRYSchema = z.object({
  v: z.string(),
  t: z.literal('qry'),
  d: z.string(),
  i: z.string(),
  dt: z.string(),
  r: z.string(),
  rr: z.string(),
  q: z.object({
    d: z.string(),
    i: z.string(),
    s: z.string(),
    dt: z.string(),
  }),
});
