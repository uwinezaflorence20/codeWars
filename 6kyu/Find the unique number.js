function findUnique(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}
console.log(findUnique( [1, 8, 4, 4, 6, 1, 8]))

// second way
