import { z } from 'zod';

export interface XIP {
  v: string;
  t: 'xip';
  d: string;
  i: string;
  ri: string;
  dt: string;
  r: string;
  q: object;
  a: {
    msg: string;
  };
}
export const XIPSchema = z.object({
  v: z.string(),
  t: z.literal('xip'),
  d: z.string(),
  i: z.string(),
  ri: z.string(),
  dt: z.string(),
  r: z.string(),
  q: z.object({}).passthrough(),
  a: z.object({
    msg: z.string(),
  }),
});
