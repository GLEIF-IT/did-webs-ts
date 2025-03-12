import { hello, goodbye } from './salutation.js';

describe('Salutation', () => {
  it("sayHello() should be 'hello'", () => {
    expect(hello).toBe('hello');
  });

  it("sayGoodbye() should be 'goodbye'", () => {
    expect(goodbye).toBe('goodbye');
  });
});
