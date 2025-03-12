import * as messages from 'did-webs-from-vlei';

import { sayHello, sayGoodbye } from 'did-webs-from-vlei';

console.log('\n[esm]');

console.log(
  messages.sayHello() === 'hello!' && messages.sayGoodbye() === 'goodbye!'
    ? 'pass'
    : 'fail'
);

console.log(
  sayHello() === 'hello!' && sayGoodbye() === 'goodbye!' ? 'pass' : 'fail'
);
