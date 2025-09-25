function betterThanAverage(classPoints, yourPoints) {
 let sum = classPoints.reduce((a,b) => a+b)/ classPoints.length
return sum < yourPoints ? "true" : " false";
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))