const salutations = require('did-webs-from-vlei');

const hello = salutations.sayHello();
console.log(hello);
const goodbye = salutations.sayGoodbye();
console.log(goodbye);

console.log(hello === 'hello!' && goodbye === 'goodbye!' ? 'PASS!' : 'FAIL.');
