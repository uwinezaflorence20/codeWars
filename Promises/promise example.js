function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);



//different way of declararing the promise
// the first way
let promise = new Promise ((resolve,reject)=>{
  setTimeout(()=>{
    resolve("it is done well ");
  },1000)
});
// the second way
function added(){
  console.log("It is done again");
}
let promise2 = new Promise(added);

