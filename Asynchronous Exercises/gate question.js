// Q1. Write a javascript function that displays a number every two seconds and stops displaying after 5 seconds
async function display() {
   let time = setInterval(() => {
      console.log(5);
   }, 1000)
   setTimeout(() => {
      clearInterval(time)
   }, 5000)
}
display();

// Q2. Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

function abortFetching() {
   let controller = new AbortController();
   setTimeout(() => {
      controller.abort();
   }, 5000)
   fetch("https://jsonplaceholder.typicode.com/users", { signal: controller.signal })
      .then((response) => {
          return response.json();
      })
      .then((result) => {
         console.log(result);
      })
      .catch((error) => {
         if (error.name === "AbortError") {
            console.log("Aborted fetching")
         }
      })
}
abortFetching();

async function abortFetching() {
   let controller = new AbortController();
   let time = setTimeout(() => {
      controller.abort();
   }, 3000)
   try{
   let response = await fetch("https://deelay.me/5000/https://jsonplaceholder.typicode.com/users", {
       signal: controller.signal })
   
          const data =await  response.json();
          console.log(data);
   }catch(error) {
         if (error.name === "AbortError") {
            console.log("Aborted fetching")
         }
         else{
            console.error(error);
         }
      }finally{
         clearTimeout(time);
      }
}
abortFetching();

//other way
function normal(){
    let controller = new AbortController();
    setTimeout(()=>{
        controller.abort();
    },5000)
    fetch("https://jsonplaceholder.typicode.com/users",{signal:controller.signal})
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((error)=>{
      if(error.name === "AbortError"){
            console.log("The abort error");
        } else {
            console.error("Other error:", error);
        }
    })
}
normal();
//q3

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data; 
    } catch (err) {
      console.log("Retrying...."); 
    }
  }
  console.log("Failed to fetch after retries");
}

fetchWithRetry("https://jsonplaceholder.typicode.com");





// gloria exercises.
//Q1
function fetchUserTodos() {
    return Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users").then(r => r.json()),
        fetch("https://jsonplaceholder.typicode.com/todos").then(r => r.json())
    ]).then(([users, todos]) =>
        users.map(user => ({
            ...user,
            todos: todos.filter(todo => todo.userId === user.id)
        }))
    );
}
fetchUserTodos().then(data => console.log(data));

//Q2
function getFastPosts() {
    const urls = [
        "https://dummyjson.com/posts",
        "https://this-may-not-exist.com/posts",
        "https://jsonplaceholder.typicode.com/posts"
    ];

    const requests = urls.map(url =>
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("Failed request");
                return res.json();
            })
    );

    return Promise.race(requests);
}
getFastPosts().then(posts => {
    console.log(posts);
}).catch(error => {
    console.log("All sources failed");
});

//q3
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Data fetched successfully!";
            resolve(data);
        }, 1000);
    });
}

fetchDataPromise()
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));


    //Q4
    async function asyncCounter() {
    const result = [];

    for (let i = 1; i <= 5; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        result.push(i);
    }

    return result;
}
asyncCounter().then(numbers => console.log(numbers));
// Output: [1, 2, 3, 4, 5]


//Q5
async function usersAddresses() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return users.slice(0, 3).map(user => ({
        address: user.address
    }));
}
usersAddresses().then(addresses => console.log(addresses));




