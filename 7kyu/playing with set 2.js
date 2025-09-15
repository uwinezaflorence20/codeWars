function isSubsetOf(s1, s2) {
  for (let elem of s1) {
    if (!s2.has(elem)) {
      return false;
    }
  }
  return true;
}

function isSupersetOf(s1, s2) {
  for (let elem of s2) {
    if (!s1.has(elem)) {
      return false;
    }
  }
  return true;
}


//  using the arrow function

let isSubsetOf = (s1,s2)=>{
  for (let elem of s1) {
    if (!s2.has(elem)) {
      return false;
    }
  }
  return true;   
}

let isSupersetOf = (s1,s2)=>{
 for (let elem of s2) {
    if (!s1.has(elem)) {
      return false;
    }
  }
  return true;
}

let s1 = new Set ([1, 3]);
let s2 = new Set([1, 2, 3, 4]);
console.log(isSubsetOf(s1,s2));
console.log(isSupersetOf(s1,s2));