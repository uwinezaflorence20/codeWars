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

// // Print each hobby with "I love ..." using arrow inside forEach
// const hobbies = ["coding", "design", "reading"];
// // Expected:
// // I love coding
// // I love design
// // I love reading

// 🔹 Advanced Exercises (this and arrow)

// Arrow inside method

// // Fix this function using arrow inside forEach
// const person = {
//   name: "Florence",
//   hobbies: ["coding", "music", "reading"],
//   showHobbies: function() {
//     this.hobbies.forEach(/* your arrow function here */);
//   }
// };
// // Expected:
// // Florence likes coding
// // Florence likes music
// // Florence likes reading


// setTimeout with arrow

// // Use an arrow function so "Hello Florence" prints after 1 second
// const user = {
//   name: "Florence",
//   greet: function() {
//     // your code here
//   }
// };

// user.greet();


// Comparison (tricky!)

// // What will this output? (Try to explain)
// const obj = {
//   name: "Florence",
//   normal: function() { console.log("Normal:", this.name); },
//   arrow: () => console.log("Arrow:", this.name)
// };

// obj.normal(); // ?
// obj.arrow();  // ?


// 👉 Do you want me to also provide the solutions with explanations for these exercises, or just keep them as practice for you to solve first?



