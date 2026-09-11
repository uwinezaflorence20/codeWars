function isValid(idn) {
  if (idn.length === 0) return false;
  let first = idn[0];
  if (!(isLetter(first) || first === '_' || first === '$')) {
    return false;
  }

  for (let i = 1; i < idn.length; i++) {
    let ch = idn[i];
    if (!(isLetter(ch) || isDigit(ch) || ch === '_' || ch === '$')) {
      return false;
    }
  }

  return true;
}

function isLetter(ch) {
  return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

function isDigit(ch) {
  return ch >= '0' && ch <= '9';
}