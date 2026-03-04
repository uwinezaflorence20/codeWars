function dominator(arr) {
let n = arr.length;
  let objOfLength = {};
  for(let num of arr){
    objOfLength[num] = (objOfLength[num] || 0)+1;
    if(objOfLength[num]> n/2){
      return num;
    }
    }
  return -1;
  }