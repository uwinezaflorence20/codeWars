let arr = [1,2,2,1,3,13,2,4,22,34,5,4,5,6];
let noDuplicate = new Set(arr);
let noD = [...noDuplicate];
console.log(noDuplicate);
console.log(noD)


function unique(arr){
    let empty =[];
for(let i=0; i< arr.length ; i++){
if(!empty.includes(arr[i])){
empty.push(arr[i]);
}

}
return empty;
}
console.log(unique([1,2,2,1,3,13,2,4,22,34,5,4,5,6]))

