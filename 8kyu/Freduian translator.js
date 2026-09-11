function toFreud(string) {
  if (string.length === 0) return "";
  const words = string.split(" ");  
  const result = words.map(_ => "sex");
  return result.join(" ");
}