const { use } = require("react");

async function getMultipleData() {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2"
  ];
  const promises = urls.map(url => 
    {
        fetch(url)
        .then(res => res.json())
    });
  const results = await Promise.all(promises);
  console.log(results);
}
getMultipleData();

//1
let one = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello Async");
    })

})
one.then((on)=>{
    console.log(on)
});
//2
let two = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("something went wrong");
    })

})
two.catch((on)=>{
    console.log(on)
});

//3.
let three= new Promise((resolve,reject)=>{
    let num = Math.floor(Math.random() * 100);
    if(num<50){
       resolve(num);
    }
    else{
        reject("not number");
    }
})
three.then((tr)=>{
console.log(tr);
})
three.catch((fla)=>{
console.log(fla)
})


let obje= {
    id: 1, 
    name: "Florence"
}
function getUser(){
    return new Promise((resolve)=>{
setTimeout(()=>{
    resolve(obje);
},1500)
    })
}
getUser().then((user)=>{
console.log(user)
})


function fetchMarks() {
  return new Promise(resolve => {
    setTimeout(() => resolve(92), 1000);
  });
}

async function processMarks() {
  try {
    const mark = await fetchMarks();

    let grade = "";
    if (mark >= 90) grade = "A";
    else if (mark >= 75) grade = "B";
    else grade = "C";

    console.log(`Florence scored ${mark} (${grade})`);
  } catch (e) {
    console.log("Error:", e);
  }
}

processMarks();
