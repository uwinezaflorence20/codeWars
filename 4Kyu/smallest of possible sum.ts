export function solution(numbers: number[]): number {
  function gcd(a:number,b:number):number{
    if(b===0){
      return a;
    }else{
      return gcd(b,a%b);
    }
  }
  let g=numbers[0];
  for(let i=1;i<numbers.length;i++){
    g=gcd(g,numbers[i]);
  }
  return g*numbers.length;
}