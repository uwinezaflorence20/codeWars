const solution = function(firstArray, secondArray) {
  let total =0;
  
  for(let i=0;i < firstArray.length;i++){
    const difference = firstArray[i] - secondArray[i];
    total += difference*difference;
  }
  return total / firstArray.length
};