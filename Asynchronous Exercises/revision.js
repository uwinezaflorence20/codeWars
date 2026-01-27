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