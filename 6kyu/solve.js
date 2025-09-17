function solve(arr){
  for (let num of arr) {
    if (!arr.includes(-num)) {
      return num;
    }
  }
};

console.log(solve([1,24,-3,4,6]))