function capitalsFirst(sentence) {
  let words = sentence.split(" ");
  let upper = words.filter(w => /^[A-Z]/.test(w) && /[a-zA-Z]/.test(w));
  let lower = words.filter(w => /^[a-z]/.test(w));
  return [...upper, ...lower].join(" ");
}