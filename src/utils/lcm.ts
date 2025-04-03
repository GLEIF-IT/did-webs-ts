import { gcd } from './gcd.js';

export const lcm = (a: number, b: number): number => (a * b) / gcd(a, b);
