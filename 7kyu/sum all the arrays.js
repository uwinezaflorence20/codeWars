function arraySum(arr) {
  let separate = arr.flat(Infinity);
  let numberArray =[];
  for(let num of separate){
      if(typeof num === 'number'){
          numberArray.push(num);
      }
  }
  return numberArray.reduce((a,b)=> a+b);

}