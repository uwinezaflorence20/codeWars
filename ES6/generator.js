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