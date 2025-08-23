function binaryToString(binary) {
  return binary
    .split('0b')                  
    .filter(b => b)               
    .map(b => String.fromCharCode(parseInt(b, 2))) 
    .join('');                    
}