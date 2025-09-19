function shorterReverseLonger(a,b){
  
  let theShortest = a.length < b.length ? a : b;
   let theLongest = a.length < b.length ? b : a;
  return theShortest+ theLongest.split("").reverse().join("")+theShortest;
}
