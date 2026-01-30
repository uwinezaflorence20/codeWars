let pro= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("This is successfull running!!!!");
    }, 2000);
})
pro.then((result)=>{
console.log(result)
})

// using the async and await
async function runThePromise(){
    let se = await pro;
    console.log(se);
}
runThePromise();

async function fetching(){
    try{
    let fet = await fetch("https://jsonplaceholder.typicode.com/users");
    let resp = await fet.json();
    console.log(resp);
    }catch(error){
        throw new Error("This is the error");
        
    }
}
fetching();


//Write a function usersAddresses that fetches users from this endpoint 
// https://jsonplaceholder.typicode.com/users and returns just the addresses 
// of the first 3 users.
async function usersAddresses(){
    // first let fetch
    let fetching = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await fetching.json();
    console.log("The data are as the following:")
    for(let i=0;i<3;i++){
        console.log(data[i].address)    
    }

}
usersAddresses();

// abort another example
async function abortFetching() {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 5000);

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });
        const data = await response.json();
        console.log("Fetch successful:", data);
    } catch (error) {
        if (error.name === "AbortError") {
            console.log("Fetching aborted due to timeout");
        } else {
            console.log("Fetch failed:", error);
        }
    } finally {
        clearTimeout(timeoutId);
    }
}

abortFetching();

// get the fastest
async function getFastPosts(){
    let firstURL = fetch("https://dummyjson.com/posts");
    let secondURL = fetch("https://jsonplaceholder.typicode.com/posts");
    let thirdURL = fetch("https://jsonplaceholder.typicode.com/posts");
try{
    let promise = await Promise.race([firstURL,secondURL,thirdURL]);
     let data = await promise.json();
    console.log("The data of the fastest URL:" ,data);
    
}catch(error){
console.log("error happened",error);
}finally{
    console.log("Finished")
}
}
getFastPosts();

//Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently
//  from the provided API endpoints and combine them based on the userId. The function should return a 
// promise that resolves with the combined data.
//Users endpoints https://jsonplaceholder.typicode.com/users
//Todos endpoints https://jsonplaceholder.typicode.com/todos
//The returned promise should resolve into an array of users, where each user object has a new key, todos. 
// This key should contain an array of todos that belong to the user, determined by matching the userId of 
// the todo with the id of the user.

async function fetchUserTodos() {
    const url1 = "https://jsonplaceholder.typicode.com/users";
    const url2 = "https://jsonplaceholder.typicode.com/todos";

    try {
        const [usersResponse, todosResponse] = await Promise.all([fetch(url1), fetch(url2)]);
        const users = await usersResponse.json();
        const todos = await todosResponse.json();

        const combinedData = users.map(user => {
            const userTodos = todos.filter(todo => todo.userId === user.id);
            return { ...user, todos: userTodos };
        });

        return combinedData;
    } catch (error) {
        console.log("Error occurred:", error);
    }
}

// Usage
fetchUserTodos().then(data => console.log(data));

// Create a counter function that counts from 1 to 5, with a 1-second delay 
// between each number. The function should return a promise that resolves 
// with an array of all the numbers when counting is complete. 
// This tests your ability to create async flows with timing and collect results over time.

// Requirements:

// Function asyncCounter() counts 1, 2, 3, 4, 5
// 1-second delay between each number
// Return promise that resolves with [1, 2, 3, 4, 5]
// Use async/await or promise chaining

async function asyncCounter(){
    let results =[];
    for(let i=1;i<=5;i++){
        await new Promise(resolve=>setTimeout(resolve,1000));
        results.push(i);
        console.log(i)
    }
    return results;
}
asyncCounter().then((num)=>{
    console.log("The Array of five counts",num)
})