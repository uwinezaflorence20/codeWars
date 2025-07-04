function arrayDiff(a, b) {
  return a.filter(element=> !b.includes(element));
}

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