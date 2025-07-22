function mergeArrays(arr1, arr2) {
  let bothArray = arr1.concat(arr2);
  let sortedArray = bothArray.sort((a,b) => a-b);
  return [...new Set(sortedArray)];
}