export function incrementer(nums: number[]) : number[] {
  // your code here
  let arr: number[] =[];
  if(nums.length ===0){
    return []
  }
    for(let i:number =0 ; i<nums.length;i++){
      arr.push((nums[i]+(i+1))%10);
    }
  return arr;
}