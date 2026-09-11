function listToArray(list) {
let result =[]
  while(list!== null){
    result.push(list.value);
    list = list.next;
  }
  return result;
}