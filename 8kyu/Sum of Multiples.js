function sumMul(n,m){
  var sum = 0;
  if(m <=0){
    return "INVALID"
  }
  for(let i =1 ; i>0; i++){
    let answer = i*n;
    if(answer >= m){
      break;
    }
    sum += answer; 
  }
  return sum;
}
console.log(sumMul(2,9));