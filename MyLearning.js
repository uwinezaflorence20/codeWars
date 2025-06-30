var word ="uwineza"
console.log(word.split(""));
var arr=[1,2,3,4,5]
console.log(arr.join());


let answer = arr.map(a => a*2);
console.log(answer);

let answer2 = arr.filter(x => x<4);
console.log(answer2);


let red = arr.reduce((a,b) => a+b);
console.log(red);