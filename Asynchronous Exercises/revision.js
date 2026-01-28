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
    let id =0;
    let data = await fetching.json();
    console.log("The data are as the following:")
    for(let i=0;i<3;i++){
console.log(id++);
        console.log(data[i].address )
        
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
