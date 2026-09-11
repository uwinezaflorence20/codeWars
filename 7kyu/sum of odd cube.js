function cubeOdd(arr) {
 let result=[];
for(let i =0 ; i< arr.length ; i++){
  if (typeof arr[i] !== "number") {
      return undefined;
    }

    if (arr[i] % 2 !== 0) {
      result.push(arr[i] ** 3);
    }
  }
 return result.reduce((num,value)=> num+value,0);
}