function findMissing(arr1, arr2) {
 let sum1 = arr1.reduce((a,b)=>a+b,0);
 let sum2 = arr2.reduce((a,b)=>a+b,0);
 return sum1-sum2
}

function findMissing(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  for (let i = 0; i < arr2.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i];
    }
  }
  return arr1[arr1.length - 1];
}