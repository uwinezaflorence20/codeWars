function logicalCalc(array, op) {
  if (op === "AND") {
    return array.every(Boolean);
  }

  if (op === "OR") {
    return array.some(Boolean);
  }

  if (op === "XOR") {
    return array.reduce((a, b) => a !== b);
  }
}
