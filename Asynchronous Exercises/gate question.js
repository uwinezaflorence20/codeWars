// Q1. Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
async function display(){
   let time =setInterval(()=>{
        console.log(5);
    },1000)
   setTimeout(()=>{
clearInterval(time)
   },5000)
}
display();

// Q2. Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

async function abort(){
    let link = await fetch("https://jsonplaceholder.typicode.com/users");
    let response = await link.json();
    console.log(response);
}
abort();