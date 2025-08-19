/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
for (const day of days) {
var upperDay = day.charAt(0).toUpperCase() + day.slice(1); 
console.log(upperDay); } 

// your code goes here

const digits1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

// exercises on for loops 
1.
const fruits = ["apple", "banana", "mango", "orange"];
for(let fruit of fruits){
    console.log(fruit);
}

//2.
const numbers = [5, 10, 15, 20];
let sum=0;
for(let number of numbers){
    sum = sum+ number;
    
}
console.log(sum);

//3.
const word = "javascript";
let vowel =["i","u","o","a","e"];
let count=0;
for(let letter of word.toLowerCase()){
if(vowel.includes(letter)){
count++;
}
}
console.log(count);

//4.
const words = ["hello", "world", "javascript"];
for(let word of words){
    let upper =word.charAt(0).toUpperCase();
    let wordUpper = upper+ word.slice(1);
    console.log(wordUpper);
}

//5. 
const sentence = ["I", "love", "programming", "so", "much"];
let longestWord ="";
for(let arrayword of sentence){
    if(arrayword.length> longestWord.length){
        longestWord = arrayword;
    }
}
console.log(`longest word is: ${longestWord}`);

//6.
const str = "developer";
let reversed = "";

for (let char of str) {
  reversed = char + reversed; 
}
console.log(reversed); 
//7.
const nested = [[1, 2], [3, 4], [5, 6]];
console.log(...nested.join());
let flattened = [];

for (let arr of nested) {
  for (let num of arr) {
    flattened.push(num);
  }
}

console.log(flattened); 

//8.
const text = "success";
let uniqueChars = [];

for (let char of text) {
  if (!uniqueChars.includes(char)) {  
    uniqueChars.push(char);
  }
}

console.log(uniqueChars); 


const fruits1 = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits1 ,...vegetables];

console.log(produce);



