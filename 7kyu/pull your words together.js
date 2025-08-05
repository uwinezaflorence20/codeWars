function sentencify(words) {
  // TODO: Write your solution here!
  let word =words.join(" ");
  let Remaining = word.slice(1);
  var firstletter= word[0].toUpperCase();
  var lastLetter = ".";
  return firstletter + Remaining + lastLetter ;
}