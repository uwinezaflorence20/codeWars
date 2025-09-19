function one(arr, fun){
  let count = 0;
  for (const item of arr) {
    if (fun(item)) {
      count++;
      if (count > 1) return false; 
    }
  }
  return count === 1;
}


let arr = [1, 2, 3];
arr.splice(1, 2);
console.log(arr);  // [1, 2]