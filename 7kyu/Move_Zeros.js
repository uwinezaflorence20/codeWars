function move_zeros(arrNum, isRight =true){
  let zero = arrNum.filter(nums => nums === 0);
  let others = arrNum.filter(nums => nums !== 0);
  if(isRight) return [...others,...zero]
  return [...zero,...others];
  
}
