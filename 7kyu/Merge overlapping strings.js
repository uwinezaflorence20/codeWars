function mergeStrings(first, second){
 let maxOverlap = Math.min(first.length, second.length);

  for (let i = maxOverlap; i > 0; i--) {
    if (first.slice(-i) === second.slice(0, i)) {
      return first + second.slice(i);
    }
  }

  return first + second;
}
