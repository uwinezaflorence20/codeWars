function solve(arr) {
  let max = arr[arr.length - 1];
  let result = [max];                 

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      result.unshift(arr[i]);        
      max = arr[i];             
    }
  }
  return result;
}