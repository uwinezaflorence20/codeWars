function  arrayStats(arr){
    let sum = arr.reduce((a,b) => a+b);
    let theAverage = sum/arr.length;
    let theMin = Math.min(...arr);
    let theMax = Math.max(...arr);
    return `{The sum is:${sum} and average is ${theAverage} and the maximum number is ${theMax} and the minimun is ${theMin}}`;
}
console.log(arrayStats([1,2,3,4,5]));