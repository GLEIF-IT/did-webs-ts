// THIS FILE IS USED BY npm start; DOES NOT SHIP WITH THE PACKAGE;
import { decodeKey } from './src/utils/decodeKey.js';
import { createKey } from './src/core/Key.js';

const keys = [
  createKey('DHr0-I-mMN7h6cLMOTRJkkfPuMd0vgQPrOk4Y3edaHjr'),
  createKey('DA-vW9ynSkvOWv5e7idtikLANdS6pGO2IHJy7v0rypvE'),
  createKey('DLWJrsKIHrrn1Q1jy2oEi8Bmv6aEcwuyIqgngVf2nNwu'),
  createKey('1AAAAg299p5IMvuw71HW_TlbzGq5cVOQ7bRbeDuhheF-DPYk'),
  createKey('1AAADHR0-I-mMN7h6cLMOTRJkkfPuMd0vgQPrOk4Y3edaHjr'),
  createKey('DLFsdZe9DkSc_irGnVvPwCTjiG0UHIMFXQk1By1lR5NC'),
];

keys.forEach((key) => console.log(decodeKey(key)));
