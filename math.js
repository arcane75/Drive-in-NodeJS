const add = (a,b) => a + b;
//alternate
module.exports.add= (a,b) => a + b;
exports.add= (a,b) => a + b;

const sub = (a,b) => a - b;
const div = (a,b) => a / b;

const test = (a,b) => add(a,b)/sub(a,b);
//alternate
module.exports.test = (a,b) => add(a,b)/sub(a,b);

module.exports = {
    test,
    add
}
//bad use
exports = sub

//alternate
module.exports.test = test
console.log(module)