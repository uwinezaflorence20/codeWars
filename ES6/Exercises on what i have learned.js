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




