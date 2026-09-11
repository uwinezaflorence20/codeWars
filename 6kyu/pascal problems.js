function pascal(depth) {
  var results = [];

  for (var r = 0; r < depth; r++) {
    var temp = [];
    for (var c = 0; c <= r; c++) {
      temp.push(calculate(c, r));
    }
    results.push(temp);
  }

  return results;
}

function calculate(c, r) {
  if (c == 0 || c == r) return 1;
  return calculate(c - 1, r - 1) + calculate(c, r - 1);
}
