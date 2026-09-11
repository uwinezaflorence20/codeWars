function areEqual(s1, s2) {
  if (s1.size !== s2.size) return false;
  for (let el of s1) {
    if (!s2.has(el)) return false;
  }
  return true;
}

function notEqual(s1, s2) {
  return !areEqual(s1, s2);
}


//using the arrow function

let areEqual = (s1,s2) => {
   if (s1.size !== s2.size) return false;
  for (let el of s1) {
    if (!s2.has(el)) return false;
  }
  return true;   
}

let notEqual = (s1,s2) =>{
    return !areEqual(s1, s2); 
}

let s1 = new Set ([1, 3]);
let s2 = new Set([1, 2, 3, 4]);

console.log(areEqual(s1,s2));
console.log(notEqual(s1,s2));
