function findDeletedNumber(arr, mixArr) {
 let sumOfArr = arr.reduce((a,b)=>a+b,0);
  let SumOfMixArr = mixArr.reduce((a,b)=>a+b,0);
  let theRemainingNumber = sumOfArr - SumOfMixArr;
  if(theRemainingNumber ===0){
    return 0
  }
  else{
  return theRemainingNumber;
}
}