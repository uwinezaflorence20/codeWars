console.log("One");
console.log("Two!");
function logThree(){
console.log("Three!")
}
function logThreeAndFour(){
logThree();
console.log("Four!");
}
logThreeAndFour();

//Geolocation API
navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.log(error)
)

// set timeout

setTimeout(()=>{
    console.log("2000ms")
},2000)
setTimeout(()=>{
    console.log("1000ms")
},1000)
console.log("End of Script!");

// today's learning on the asynchrounous
function getCurrentPosition(){
    return new promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(resolve,reject);
    })
}

async function getUserLocation(){
    try{
        const location = await getCittentPosition();
        console.log(location);
    }catch(error){
        console.error(error)
    }
}