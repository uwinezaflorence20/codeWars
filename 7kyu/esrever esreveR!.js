function esrever(str) {
     if (str === '') return '';
  const punctuation = str[str.length - 1];
  console.log(punctuation);
  const withoutPunctuation = str.slice(0, -1);
  console.log(withoutPunctuation)

  const reversed = withoutPunctuation.split('').reverse().join('');

  return reversed + punctuation;
}
console.log(esrever("Uwineza."))