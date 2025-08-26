const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const digit of digits) {
  console.log(digit);
 
}

const digits2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayIterator = digits2[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

const names =["evodie", "umuhuza","florence","uwineza"]
const array = names[Symbol.iterator]();
console.log(array.next());
console.log(array.next());
console.log(array.next());
console.log(array.next());
console.log(array.next());


