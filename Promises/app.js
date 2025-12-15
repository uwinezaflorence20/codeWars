const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
// Write your code below:
function myExecutor(resolve,reject){
  if(inventory.sunglasses > 0){
    resolve('Sunglasses order processed.');
  }else{
reject( 'That item is sold out.');
  }
}
function orderSunglasses(){
  return new Promise(myExecutor);
}
let orderPromise = orderSunglasses();
console.log(orderPromise)




for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}


console.log("Start");

setTimeout(() => {
  console.log("Middle");
}, 0);

console.log("End");


