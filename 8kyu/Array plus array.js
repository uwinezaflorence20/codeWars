function arrayPlusArray(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return " the arrays doen't equal";
  }
 const combinedArray = arr1.concat(arr2);
  
  const sum = combinedArray.reduce((accumulator,currentvalue)=> accumulator + currentvalue);
  return sum;
  
}

// another way using for loop

function arrayPlusArray(arr1, arr2) {
  
  if(arr1.length !== arr2.length){
    return " the arrays doen't equal";
  }
 const combinedArray = arr1.concat(arr2);
let sum =0;
for ( let i = 0 ; i< combinedArray.length ; i++){
    sum += combinedArray[i];
}
  return sum;
}
console.log(arrayPlusArray([1,2,3] , [1,2,3]));