function multipleOfIndex(array) {
  let result =[];
  for(let i = 0 ; i<array.length ;i++){
    if(i===0 && array[i]===0){
      result.push(array[i]);
    }
    else if(array[i] % i ===0){
      result.push(array[i]);
    }
    
  }
  return result;
}