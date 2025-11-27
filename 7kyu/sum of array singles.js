function repeats(arr){
 let sum =0;
  for(let i=0; i<arr.length;i++){
    if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
      sum += arr[i];
    }
  }
return sum;
};