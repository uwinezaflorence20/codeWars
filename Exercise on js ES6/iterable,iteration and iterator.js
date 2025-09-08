let arr = [1, 2, 3];

console.log(typeof arr[Symbol.iterator]); 
// function → means "arr" is iterable


let arr1 = [10, 20, 30];
let iterator = arr1[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// arr (the array) is iterable.
// iterator (the object with next()) is an iterator.

// let arr = [1, 2, 3];

// for (let value of arr) {
//   console.log(value); 
// }
// 1
// 2
// 3


