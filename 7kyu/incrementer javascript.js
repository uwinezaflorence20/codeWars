function incrementer(nums) { 
  let arr = []
    if(nums.length === 0){
        return []
    }
    else{
for(let i =0 ; i< nums.length;i++){
     arr.push((nums[i] + (i+1))%10);
}
}
return arr;
  }