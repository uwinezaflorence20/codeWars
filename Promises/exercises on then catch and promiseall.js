//Question 1
let pr = new Promise((resolve,reject)=>{
 setTimeout(()=>{
    resolve("Hello World");
 },2000);
})
.then((result)=>{
console.log(result);
})
// Question 2

let pr0 = new Promise((resolve,reject)=>{
 setTimeout(()=>{
    reject("reject");
 },2000);
})
.catch((result)=>{
console.log(result);
})

// example 3
function first(){
    return new Promise((resolve, reject)=>{
resolve("A")
    })
}
function second(){
    return new Promise((resolve,reject)=>{
resolve("A+B")
    })
}
first()
.then((result)=>{
    return second(result);
})
.then(final => console.log(final));

//exercise 4

function getName() {
  return Promise.resolve("Florence");
}
function greet(name) {
  return Promise.resolve("Hello " + name);
}

getName()
.then((result)=>{
    return greet(result)
})
.then((finalvalue)=>{
    console.log(finalvalue)
})

// exercise 5

Promise.resolve("Start")
  .then(val => {
    console.log(val);
    throw "Error in chain!";
  })
  .then(val =>{
     console.log("This won't run")
    })
  .catch(err => console.log(err));



//   ✅ EXERCISE 6 — Promise.all()
// Make 3 promises:
// const p1 = Promise.resolve(10);
// const p2 = Promise.resolve(20);
// const p3 = Promise.resolve(30);

// Use Promise.all([p1, p2, p3])
// Print the array of values.
// ✔️ Expected Output
// [10, 20, 30]


// ✅ EXERCISE 7 — Promise.all() with Delay
// Make three functions:
// function task1() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Task 1 done"), 1000);
//   });
// }

// function task2() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Task 2 done"), 2000);
//   });
// }

// function task3() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Task 3 done"), 1500);
//   });
// }

// Call:
// Promise.all([task1(), task2(), task3()])
//   .then(values => console.log(values));

// ✔️ Expected Output (after 2 seconds)
// ["Task 1 done", "Task 2 done", "Task 3 done"]


// ✅ EXERCISE 8 — Promise.all() With Reject
// Create:
// const success = Promise.resolve("Done!");
// const failed = Promise.reject("Failed!");

// Run:
// Promise.all([success, failed])
//   .then(console.log)
//   .catch(console.error);

// ✔️ Expected
// Failed!


// 📌 Want the solutions too?
// I can provide all the correct answers for each exercise — just tell me!




const promise1 =  Promise.resolve("quick resolve");
console.log(promise1);
console.log(promise1, 'quick resolve');


const promise = Promise.all([
  new Promise(resolve => resolve(1)),new Promise(resolve => resolve(2)),new Promise(resolve => resolve(3))
]);
console.log(promise);
console.log(promise, [1, 2]);



const earlyRejectedPromise = new Promise((resolve, reject) => reject('I am a REJECTOR'));
const lateResolvingPromise = new Promise(resolve => setTimeout(resolve, 10));
const promise2 = Promise.race([earlyRejectedPromise, lateResolvingPromise]);
console.log(promise2, {message: 'I am a rejector'});