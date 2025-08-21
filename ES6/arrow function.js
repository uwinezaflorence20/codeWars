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



