import { z } from 'zod';

export interface RPY {
  v: string;
  t: 'rpy';
  d: string;
  i: string;
  dt: string;
  r: string;
  a: {
    d: string;
    i: string;
    name: string;
    role: string;
  };
}

export const RPYSchema = z.object({
  v: z.string(),
  t: z.literal('rpy'),
  d: z.string(),
  dt: z.string(),
  r: z.string(),
  a: z.object({
    eid: z.string(),
    scheme: z.string(),
    url: z.string(),
  }),
});
