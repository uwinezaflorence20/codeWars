const urls = ["https://jsonplaceholder.typicode.com/users/1", "https://jsonplaceholder.typicode.com/posts?userId=1", "https://jsonplaceholder.typicode.com/comments?postId=${firstPostId}"];
urls.forEach(url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Data loaded:", data);
    });
});

console.log("Loop finished");

//using Promise.all()

const promises = urls.map(url => fetch(url).then(res => res.json()));
Promise.all(promises).then(allData => {
  console.log("All data loaded:", allData);
});
console.log("the checking");


// exercises on the promise with forEach() loop

//Exercise 1
let prom = new Promise((resolve,reject)=>{
setTimeout(()=>{
    console.log("Hello world!");
},2000)
})
.then((resolve)=>{
    console.log(resolve);
})

//Exercise 2
let letReject = new Promise(function(resolve,reject){
    let number=0.1;
  if(number < 0.5){
    reject("not success");
  }
  else{
    resolve("Success");
  }
})
.then((resolve)=>{
    console.log(resolve);
})
.catch((reject)=>{
    console.log(reject)
})


//Level 2: Promises with arrays and forEach
//Exercise 3 and 4
let arr =['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2','https://jsonplaceholder.typicode.com/todos/3'];
console.log("Starting fetch for URL")
arr.forEach(ar=>{
    fetch(ar)
    .then(response=>response.json())
    .then((data)=>{
        console.log("The data are:",data)
    })
});
console.log("Loop finished")

//Level 2: Promises with arrays and forEach
//Exercise 5
let arr5 =['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2','https://jsonplaceholder.typicode.com/todos/3'];
console.log("Starting fetch for URL");
let ma = arr5.map(url => fetch(url).then((response)=>response.json()));
Promise.all(ma).then((answer)=>{
    console.log("This are the data:",answer);
});





