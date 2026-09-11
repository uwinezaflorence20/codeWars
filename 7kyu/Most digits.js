function findLongest(array){
    let longest = array[0];
  for(let arr of array){
      if(String(arr).length > String(longest).length){
          longest = arr;
      }
  }
  return longest;
}