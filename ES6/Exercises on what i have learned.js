//let and const
let city="Kigali";
const country="Rwanda";
city="gasabo";

const myLocation ={
    city,country
}
console.log(myLocation);
// country="USA"
console.log(city);
console.log(country);




//template Literals

let locationMessage= `I live in ${city}, ${country}`;
console.log(locationMessage);

// Array Destructuring
const fruits = ['apple', 'banana', 'mango', 'orange', 'grapes'];
const[first,second,third]=fruits;
console.log(`First fruit: ${first}, Second fruit: ${second}, Third fruit: ${third} `);

//object destructuring

const student = {
  name: 'John',
  age: 20,
  major: 'Computer Science'
};

let{name,major}= student;
console.log(`${name} is studying ${major}`);

const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes);




