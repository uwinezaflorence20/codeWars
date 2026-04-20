function findUnique(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}
console.log(findUnique( [1, 8, 4, 4, 6, 1, 8]))

// second way
let findUnique =(arr)=> {
if(arr.length === 0) return [];
let sorted = arr.sort((a,b)=> a-b);
let result =[];
for(let i =0 ; i<=sorted.length;i+=2){
    if(sorted[i] !== sorted[i+1]){
       return sorted[i];
    }
}
}