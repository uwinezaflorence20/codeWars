function twoSort(s) {
 const first = s.slice().sort()[0];      
  return first.split('').join('***');
}