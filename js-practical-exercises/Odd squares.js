function oddSquares(arr){
return arr.filter(a => a%2 !== 0).map(a=> a*a);
}
console.log(oddSquares([1, 2, 3, 4, 5, 6]));
console.log(oddSquares([10, 15, 20, 25, 30]));