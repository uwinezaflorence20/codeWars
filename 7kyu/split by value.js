function splitByValue(k, elements) {
  let less = [...elements.filter(nums=>nums<k)];
  let greater = [...elements.filter(nums=>nums >= k)];
  return [...less,...greater];
}
