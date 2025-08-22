//1.
// Convert this to an arrow function
function add(a, b) {
  return a + b;
}

const add = (a,b) => a+b;
console.log(add(1,2));
//2.
const square = a=> a*a;
console.log(square(5));
//3.

let obj ={
    name:"Florence"
}
const  re = ()=> `${obj.name}`;
console.log(re());


//intermediate

//1.

const nums = [1, 2, 3, 4];
const double = nums.map( num => num *2

);
console.log(double);

//2.
const nums2 = [10, 15, 20, 25];
const filt = nums2.filter(num2 => num2 % 2 ===0 );
console.log(filt);

// Arrow + forEach

// Print each hobby with "I love ..." using arrow inside forEach
const hobbies = ["coding", "design", "reading"];
hobbies.forEach(function(hobby){
  console.log(`I love ${hobby}`);

});
//  Expected:
//  I love coding
//  I love design
// I love reading

// 🔹 Advanced Exercises (this and arrow)

// Arrow inside method

//  Fix this function using arrow inside forEach
 const person = {
  name: "Florence",
 hobbies: ["coding", "music", "reading"],
  showHobbies: function() {
    this.hobbies.forEach((hobby)=>{
      console.log(`${this.name} likes ${hobby}`)
    });
   }};
   person.showHobbies();

//  Expected:
//  Florence likes coding
//  Florence likes music
//  Florence likes reading


// setTimeout with arrow

//  Use an arrow function so "Hello Florence" prints after 1 second
const user = {
   name: "Florence",
  greet: function() {
       setTimeout(()=>{
        console.log(`Hello ${this.name}`);
       },4000);
   }
 };

 user.greet();


// Comparison (tricky!)

//  What will this output? (Try to explain)
 const obj1 = {
   name: "Florence",
   normal: function() { console.log("Normal:", this.name); },
  arrow: () => console.log("Arrow:", this.name)
 };

 obj1.normal(); //Normal: Florence
 obj1.arrow();  //Arrow: Not working


//  Exercise: 
//  1. Create an object student with name, age, and hobbies (use shorthand). 
//  2. Destructure the object to get name and hobbies. 
//  3. Use for...of to print each hobby. 
//  4. Create a function average(...nums) that returns the average. 
//  5. Print result with template literal: 
//  "Florence’s average score is X".

let name1 = "Florence";
let age= 20;
let hobb =["dancing","sleeping"];
const ob ={
  name1,
  age,
  hobb,
  hobbies: function(){
  for(let hobby of hobb){
    console.log(hobby)
  }
}
};
let {name1: myName, hobb: myHobby } = ob;
console.log(`name is ${myName} and my hobby is ${myHobby[0]} and ${myHobby[1]} `);

for(let hob of hobb){
  console.log(hob);
}


function average(...num){
  let sum =0;
 
for(let i=0; i< num.length;i++){
 sum =sum+num[i];

}
let average = sum / num.length;
return `Florence's average score is ${average}`;
}
console.log(average(1,2,3,4,5));


// 1. let & const
// Create a const array of 3 cities.
// Try adding a city using .push() → should work.
// Try reassigning the array → should fail.
// Create a let variable count starting at 0 and increment it in a loop.

const cities =["Rwanda","Arab","England"];
console.log(cities);
console.log(cities.push("Egypt"));
console.log(cities);


for(let count =0 ; count<=10 ; count++){
  console.log(count);
}

// 2. Template Literals

// Create variables firstName and lastName.

let firstName ="UWINEZA";
let lastName ="Florence";
console.log(`Hello, My name is ${firstName} ${lastName} and I am learning Javascript.`)

// 3. Destructuring
// Create an array of 5 numbers.
// Destructure the first two numbers into a and b, and the rest into another array.
// Create an object for a book {title, author, year}. Destructure title and year into variables.

let array = [10,59,43,5,64];
let [a,b] =array;
let [c,d,e] = array;
console.log(a,b);
console.log(c,d,e);


const book ={
 tittle :"My Life ",
author :" Magnifique Munezero",
year:"2025"
}
let {tittle,year} = book;
console.log(`${tittle} , ${year}`);


// Object Literal Shorthand
// Create variables x, y, z and use them to create an object {x, y, z}.
// Add a method sum() inside the object that returns x + y + z.

let x=10;
let y=20;
let z=30;
let number ={
x,y,z,
sum: function(){
  return this.x +this.y+this.z;
}
}
console.log(number.sum());


// 5. for...of
// Loop over an array of strings and print each with “I love <string>”.
// Loop over a string "JavaScript" and print each character.

let arr = ['God','People'];
for(let ar of arr){
  console.log( `I love ${ar}`);
}

let str ="JavaScript";
for(let st of str){
  console.log(st);
}

// 6. Spread Operator
// Merge two arrays [1,2,3] and [4,5,6] into one array.
// Copy an object {a:1, b:2} into a new object and add a new key c:3.

let ar1=[1,2,3];
let ar2=[4,5,6];
let two =[...ar1,...ar2]
console.log(two);

let ob1={
  a:1, 
  b:2
}
let ob2={
  c:3
}

let ob3 ={...ob1,...ob2};
console.log(ob3);

// 7. Rest Parameter
// Write a function multiplyAll(...nums) that multiplies all numbers passed to it
// Write a function joinStrings(separator, ...strings) that joins all strings with the given separator.

function multiplyAll(...nums){
  let products=1;
  for(let i=0 ;i<nums.length ; i++){
   products=products*nums[i];
  }
return products;
}
console.log(multiplyAll(1,2,3,4,5));

// 8. Arrow Functions
// Convert this function to an arrow function:
// function square(n) {
//   return n * n;
// }
// Create an arrow function that takes 2 numbers and returns their sum minus product.

let arrow = n => n*n;
console.log(arrow(10));

let summation = (num1,num2) =>{
  let sum = num1+num2;
  let product = num1*num2;
  return `${sum}`- `${product}`;
}
console.log(summation(1,2));

// 9. this in Regular vs Arrow Function
// Create an object counter with:
// let counter = {
//   count: 0,
//   increment: function() { console.log(this.count); },
//   arrowIncrement: () => { console.log(this.count); }
// }
// Call counter.increment() and counter.arrowIncrement()
// Explain why they print different results.
// 10. Combined Challenge
// Create an object team with name, members (array of names), and scores (array of numbers).
// Destructure name and members.
// Print all member names using for...of.
// Create a function averageScore(...scores) and print a template literal:
// Team <name> has an average score of <averageScore>
// If you want, I can also provide the full solutions for all of these exercises in one clean code file, so you can check your answers.
// Do you want me to do that?

