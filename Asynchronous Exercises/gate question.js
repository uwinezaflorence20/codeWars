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

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data; // Success, return data
    } catch (err) {
      console.log("Retrying...."); // Log retry message
    }
  }
  console.log("Failed to fetch after retries");
}

// Usage
fetchWithRetry("https://jsonplaceholder.typicode.com")
  .then(data => console.log("Fetched data:", data));
