function duplicates(arr) {
return arr.filter((value,index)=>arr.indexOf(value) !== index && arr.lastIndexOf(value) === index);
        
}
console.log(duplicates([1, 2, 3, 4, 5]))
console.log(duplicates([1, 2, 1, 2, 1, 2, 1]))



function duplicates(arr) {
return arr.filter((value,index)=>arr.indexOf(value) !== index);
}
console.log(duplicates([1, 2, 3, 4, 5]))
console.log(duplicates([1, 2, 1, 2, 1, 2, 1]))
console.log(duplicates(['1', 2, 3, 3, '2', 1]))