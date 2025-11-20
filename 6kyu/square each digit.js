sd=x=>
function doubleEachNumber(num){
    return num.toString().split('').map((x)=>x*x).join('');
}
console.log(doubleEachNumber(3212));//