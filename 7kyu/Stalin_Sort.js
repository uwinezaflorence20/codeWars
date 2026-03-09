function stalinSort(array) {
let theFirstElement = array[0];
let result = [];
if(array.length ===0)return [];
for(let i =0;i<=array.length;i++){
    if(theFirstElement<= array[i]){
        result.push(array[i]);
    }
}
return result
}