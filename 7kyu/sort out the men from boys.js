function menFromBoys(arr){
let even = arr.filter((num) => num % 2 === 0).sort((a,b)=> a-b);
let odd = arr. filter(num => num%2 !==0).sort((a,b)=> b-a);
return [...new Set([...even,...odd])]
}