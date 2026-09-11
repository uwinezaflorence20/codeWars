function all( arr, fun ){
  // ...
  for(let element of arr){
    if(!fun(element)){
      return false;
    }
  }
  return true;
}
let myinput = all([2,3,4,5,7,6,],function(v) { return v < 9; });
console.log(myinput);