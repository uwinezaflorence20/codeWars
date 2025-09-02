function reverseIt(data){
  if (typeof data === 'string') {
    return data.split('').reverse().join('');
  } 
  else if (typeof data === 'number') {
    return Number(String(data).split('').reverse().join(''));
  } 
  else {
    return data;
  }
}