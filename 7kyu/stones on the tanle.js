function solve(stones) {
    let count =0;
  for(let i=0 ; i<stones.length-1; i++){
      if(stones[i+1] === stones[i]){
          count++;
      }
  }
  return count;
}