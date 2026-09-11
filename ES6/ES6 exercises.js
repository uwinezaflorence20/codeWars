//Arry Methods + Arrow functions
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.map(a => a*a).filter(index=> index%2===0));

//Destructuring + Default Values
const student = { name: "Florence", age: 21 };
const{name,age,country="Rwanda"} = student;
console.log(student);

//Spread Operator with Objects
const info = { name: "Florence", age: 21 };
const extra = { country: "Rwanda", course: "Software Engineering" };
var merger ={...info,...extra};
console.log(merger);

// class inhertance

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person{
constructor(school){
    super();
    this.school = school;
}
introduce(){
return "hello people";
}
}

let st= new Person("Uwineza",23);
console.log(st.name);
console.log(st.age);

let st1 = new Student("GSNDL-Byimana");
console.log(st1.school);
console.log(st1.introduce());


// Promise chain
var promise = new Promise((resolve,reject)=>{
    resolve(5);

})
var res = promise.then(result=>{
    return result*2;
})
.then(result=>{
    console.log(result+3);
})

//await async
// A function that returns a promise
function getNumber() {
  return new Promise((resolve) => {
    resolve(5);
  });
}

async function calculate() {
  let result = await getNumber(); 
  result = result * 2;  
  result = result + 3;  
  console.log(result);
}
console.log(calculate());  


function fetchNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(10);
    }, 8000); 
  });
}

async function showNumber() {
  console.log("Start");
  const result = await fetchNumber(); 
  console.log("Number is:", result); 
  console.log("End");
}

console.log(showNumber());

//aync and await
let pro = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve(10);
  },5000);
});

async function number(){
  let  asy = await pro;
  console.log(asy);
}
console.log(number());

//rest parameter

function multiply(...nums) {
 return nums.reduce((a,b)=>a*b);
}
console.log(multiply(2,3,4));

// import and export with default export
export default function subtract(a, b) {
  return a - b;
}

//Set& Map

const number = [1, 2, 2, 3, 4, 4, 5];
var set = new Set(number);
console.log(set);

var map = new Map([["name", "uwineza"], ["age", "Florence"]]);
console.log(map);


// proxy with validation

// Exercise
const number1 = [];

const proxy = new Proxy(number1, {
  set(target, property, value) {
    if(value < 0){
      console.log("only allow positive");
      return false;
    }
   target[property] =value;
   return true;
  }
});

proxy.push(10);  
proxy.push(-5);  
console.log(proxy);




