function reverseMessage(str) {
  return str.split(" ").reverse().map(word => {
    word = word.toLowerCase().split("").reverse().join("");

    if (word[0] && /[a-z]/.test(word[0])) {
      word = word[0].toUpperCase() + word.slice(1);
    }

    return word;
  }).join(" ");
}