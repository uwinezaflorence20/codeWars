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


// exercises 1
// Example usage:
// const countdown = createCountdown(5);
// for (let num of countdown) {
//   console.log(num); // 5, 4, 3, 2, 1
// }

function createCountdown(start) {
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next() {
          if (current > 0) {
            return { value: current--, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
}

const countdown = createCountdown(5);
for (let num of countdown) {
  console.log(num);
}










