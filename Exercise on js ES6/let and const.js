// let in javascript
// exercises 1
let varX
if (true) {
   varX = true;
}
assert.equal(varX, true);
// exercises 2
if (true) {
  let  letX = true;
}
assert.throws(() => letX, ReferenceError);
// exercises 3
let obj = {x: 1};
for (let key in obj) {}
assert.throws(() => key, ReferenceError);
// exercises 4
{
  let letX = true;
}
assert.throws(() => letX, ReferenceError);
//exercises 5
let variable ;
assert.strictEqual(variable, undefined);

// const
//1
const constNum = 0;
// constNum = 1;
assert.equal(constNum, 0);
//2
const constString = 'I am a const';
//constString = 'Cant change you?';
assert.equal(constString, 'I am a const');
//3
const arr = [];
arr[0] = 42; // arr[0] =0;
assert.equal(arr[0], 42);

//4
const obj2 = {x: 1};
obj2.x = 3;
assert.equal(obj2.x, 3);


var x = 42;
var y = 23;
var evaluated = `'${ x }+${ y }'`;
console.log(evaluated);
console.log(evaluated, x + '+' + y);


var x = 42;
var y = 23;
var evaluated = `${ x } + ${ y }`;
console.log(evaluated);


function getEnv(){
  return 'ECMAScript';
}
var evaluated = `${ getEnv() }`;
console.log(evaluated)

