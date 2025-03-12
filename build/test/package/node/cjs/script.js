const messages = require('did-webs-from-vlei');

console.log('\n\x1b[34m************');
console.log('* CommonJS *');
console.log('************\x1b[0m\n\n');

console.log(
  messages.sayHello() === 'hello!' && messages.sayGoodbye() === 'goodbye!'
    ? '\x1b[32m[x] OK\x1b[0m'
    : '\x1b[31m[x] FAIL\x1b[0m'
);
