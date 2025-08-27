function hammingWeight(x){
  let count = 0
  while(x>0){
    if(x%2 === 1){
          count ++
    } 
     x = Math.floor(x/2)
  }
  return count
}