function removeSmallest(numbers) {
 if(numbers.length ===0) return [];
  const min = Math.min(...numbers);
  const index = numbers.indexOf(min);
  
  const result = [];
  let i = 0;
  
  for(const num of numbers){
    if(i !== index){
      result.push(num);
    }
    i++;
  }
  return result;
}