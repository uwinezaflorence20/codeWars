// return an array of numbers (that are a power of 2)
// for which the input "n" is the sum
const powers = n => {
  let result =[]
  let power =1 
  while(n>0){
    if(n%2===1){
      result.push(power);
    }
    n= Math.floor(n/2);
    power *=2;
  }
return result;
};