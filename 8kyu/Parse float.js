function parseF(input) {
  if (input === null || input === undefined || input === "" || typeof input === "boolean") {
    return null;
  }
  const num = Number(input);
  return isNaN(num) ? null : num;
}