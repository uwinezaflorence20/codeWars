function divisors(integer) {
    let divisor=[];
    for(let i=2 ; i< integer; i++){
        if(integer%i === 0){
            divisor.push(i);
        }
 }
     if (divisor.length === 0){
            return integer+ " is prime";
        }
   
  return divisor;
}