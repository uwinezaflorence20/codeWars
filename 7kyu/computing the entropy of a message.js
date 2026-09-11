function entropy(message) {
  if (message.length === 0) return 0.0;

  const symbols = message.replaceAll(" ", "");

  if (symbols.length === 0) return 0.0;

  const counts = new Map();

  for (const char of symbols) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  let entropy = 0;

  for (const count of counts.values()) {
    const p = count / symbols.length;
    entropy -= p * Math.log2(p);
  }

  return entropy;
}