async function name(params) {
    setTimeout(()=>{
console.log("Hello this is the first exercises");
    },2000)
} 
name();

let promise = new Promise(()=>{
       setTimeout(()=>{
console.log("Hello this is the first exercises");
    },2000)
})
.then((result)=>{
console.log(result);
})

//Another way using the normal function
function ivoked(callback){
setTimeout(callback,2000);
}
function display_message(){
    console.log("Hello!");
}
ivoked(display_message);
