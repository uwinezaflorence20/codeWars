function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}
let gen = generate();
console.log(gen.next())
console.log(gen.next())
// let iter = gen.next();
// let iter2 = gen.next();

// console.log(iter)
// console.log(iter2)
// console.log(iter)
// console.log(iter)
// console.log(gen)
// console.log(gen)


let scores = [10,20,30];
scores.message = 'Hi';

console.log("for...in:");
for (let score in scores) {
  console.log(score); 
}

console.log('for...of:');
for (let score of scores) {
  console.log(score);
}