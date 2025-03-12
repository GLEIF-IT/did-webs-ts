import { hello, goodbye } from './salutation/salutation.js';

export function sayHello(): string {
  const message = `${hello}!`;
  return message;
}

export function sayGoodbye(): string {
  const message = `${goodbye}!`;
  return message;
}

export default {
  sayHello,
  sayGoodbye,
};
