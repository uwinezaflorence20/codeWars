console.log("Start");
setTimeout(()=>{
    console.log("CallBack");
},5000);
console.log("End");


async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    console.log(users);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();
