function sepStr(str) {
  const words = str.split(" ");
  const maxLen = Math.max(...words.map(w => w.length)); 

  const result = [];
  for (let i = 0; i < maxLen; i++) {
    const row = words.map(word => word[i] || "");
    result.push(row);
  }
  return result;
}