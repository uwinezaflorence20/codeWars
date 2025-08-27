function sumOrProduct(array,n) {
let ascending = array.sort((a,b)=> b-a).slice(0,n).reduce((a,b) =>a+b);
let descending = array.sort((a,b)=> a-b).slice(0,n).reduce((a,b) =>a*b);
console.log(ascending);
console.log(descending)
if(ascending>descending){
    return "sum";
}
else if (ascending<descending) {
    return "product"
}
else{
    return "same";
}
}