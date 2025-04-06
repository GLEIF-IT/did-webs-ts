import { z } from 'zod';

export interface BAR {
  v: string;
  t: 'bar';
  d: string;
  i: string;
  dt: string;
  r: string;
  a: {
    d: string;
    i: string;
    dt: string;
    name: string;
    role: string;
  };
}

export const BARSchema = z.object({
  v: z.string(),
  t: z.literal('bar'),
  d: z.string(),
  i: z.string(),
  dt: z.string(),
  r: z.string(),
  a: z.object({
    d: z.string(),
    i: z.string(),
    dt: z.string(),
    name: z.string(),
    role: z.string(),
  }),
});
