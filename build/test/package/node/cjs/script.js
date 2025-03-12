const messages = require('did-webs-from-vlei');

console.log('\n[cjs]');

console.log(
  messages.sayHello() === 'hello!' && messages.sayGoodbye() === 'goodbye!'
    ? 'pass'
    : 'fail'
);
