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

function getAges(sum,difference){
  if (sum < 0 || difference < 0) return null;

  const older = (sum + difference) / 2;
  const younger = (sum - difference) / 2;

  if (older < 0 || younger < 0) return null;
    
  return [older, younger];
};

function modifyMultiply (str,loc,num) {
  //Code here
  const words = str.split(" ");          
  const word = words[loc];               
  const repeated = Array(num).fill(word); 
  return repeated.join("-"); 
} 

function solve(arr){
  for (let num of arr) {
    if (!arr.includes(-num)) {
      return num;
    }
  }
};

function sortByBinaryOnes(list){
  // your code here
  return list.sort((a, b) => {
    const aBin = a.toString(2), bBin = b.toString(2);
    const countOnes = s => s.split('').filter(c => c === '1').length;
    const aOnes = countOnes(aBin), bOnes = countOnes(bBin);
    return bOnes - aOnes || aBin.length - bBin.length || a - b;
  });
}
