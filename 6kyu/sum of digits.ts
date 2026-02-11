export const digitalRoot = (n:number):number => {
if(n<10) return n
let sum = n.toString().split('').map(Number).reduce((a,b)=>a+b);
return digitalRoot(sum);
};