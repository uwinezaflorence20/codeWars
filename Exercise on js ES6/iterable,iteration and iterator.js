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


const nested = [[1, 2], [3, 4], [5, 6]];
let array =[];
for( let neste of nested){
    for(nest of neste){
        array.push(nest);
    }
}
console.log(array)
// 👉 Task: use for...of to create a new array [1, 2, 3, 4, 5, 6]

// Use for...of to count how many vowels (a, e, i, o, u) appear in the string.

const sentence = "I love learning JavaScript";
let  vowels =['i','u','o','a','e'];
let count=1;

for(let char of sentence.toLowerCase()){
    if(vowels.includes(char)){
    count++;
    };

}
console.log(count);


const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];
console.log([...fruits,...vegetables])


const order = '20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"';
console.log([...order])
