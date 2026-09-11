let prom = new Promise((resolve, reject) => {
  let num = Math.random();
  if (num < .5 ){
    resolve('Yay!');
  } else {
    reject('Ohhh noooo!');
  }
});

const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};

const handleFailure = (rejectionReason) => {
  console.log(rejectionReason);
};

prom.then(handleSuccess, handleFailure);


// another example
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(successfully){
console.log(successfully);
}
function handleFailure(failly){
  console.log(failly)
}
checkInventory(order).then(handleSuccess,handleFailure);


// another way of writing this
checkInventory.then((handleSuccess)=>{
console.log(handleSuccess)
})
checkInventory.then(null,(handleFailure)=>{
    console.log(handleFailure);
})

returnsFirstPromise()
.then((firstResolveVal) => {
  return returnsSecondValue(firstResolveVal)
})
    .then((secondResolveVal) => {
      console.log(secondResolveVal);
    })

const {checkAvailability} = require('./library.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
let checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.');
let checkPants = checkAvailability('pants','Favorite Supply Co.');
let checkBags= checkAvailability('bags','Favorite Supply Co.');

Promise.all([checkSunglasses,checkPants,checkBags])
.then(onFulfill)
.catch(onReject);





