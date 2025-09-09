//example of promise
let promise = new Promise((resolve, reject) => {
  // Do some async work
  let success = true;

  if (success) {
    resolve("Operation successful!");  // Fulfilled
  } else {
    reject("Something went wrong!");   // Rejected
  }
});
console.log(promise);

// 

let promise3 = new Promise((resolve, reject)=> {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("well done !!!!"), 5000);
});
console.log(promise3)

let promise4 = new Promise((resolve, reject)=> {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});
console.log(promise4)

let promise5 = new Promise((resolve, reject)=> {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});

console.log(promise5)

let promis = new Promise((resolve, reject)=> {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promis.then(
  result => console.log(result), // shows "done!" after 1 second
  error => console.log(error) // doesn't run
);
console.log(promis);

// exercises

let first = new Promise((resolve,reject)=>{
    setTimeout(()=>
        resolve("Hello, Promise!")
    ,2000);
});
console.log(first);

// then exercise

let second = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Good morning!");
        reject("hell no there is no morning here");
    }, 1000);


})
second.then(result=>{
    console.log(result)
});
second.catch(error=>{
    console.log(error);
})
console.log(second);



let second2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");  // this will succeed after 2s
  }, 2000);

   setTimeout(() => {
    reject("Hello, no Promise here please it is only error!");  // this will succeed after 2s
  }, 2000);
});

// Consume the promise with then & catch
second2
  .then(result => {
    console.log(result); // "Hello, Promise!" after 2 seconds
  })
  .catch(error => {
    console.log("Error:", error); // only if reject() is called
  });


  let fail = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Something went wrong!");
    },6000)
  });
  fail.catch(error=>{
    console.log("error:",error);
  })


  let passOrFail = new Promise((resolve,reject)=>{
    console.log("checking the result");
    setTimeout(()=>{
    if(Math.random()>0.5){
        resolve("You Won!");
    }
    else{
        reject("You Lost!");
    }

  },2000)
  })

  passOrFail.then(result=>{
    console.log("Thank God:", result)
  })

  passOrFail.catch( error =>{
    console.log("Ohh no ", error)
  })



  let Doubling = new Promise((resolve,reject)=>{

     resolve(10);

  })
  Doubling.then(
    result=>{
        console.log(result*2);
    }
  )

  let chained = new Promise((resolve,reject)=>{
    resolve(5);
  });

let res =chained.then(result=>{
    return result+3;
    
  })
  .then(result=>{
    return result*2;
  })
  .then(result =>{
    console.log(result)
  })


