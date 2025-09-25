function betterThanAverage(classPoints, yourPoints) {
 let sum = classPoints.reduce((a,b) => a+b)/ classPoints.length
return sum < yourPoints ? true : false;
}