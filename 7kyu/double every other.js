function doubleEveryOther(a) {
  return a.map((num, index) => index % 2 === 1 ? num * 2: num);
}