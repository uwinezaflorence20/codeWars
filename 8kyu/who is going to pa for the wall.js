function whoIsPaying(name) {
  if (name.length <= 2) {
    return [name];
  } else {
    let theFirstTwo = name.slice(0, 2);
    return [name, theFirstTwo];
  }
}