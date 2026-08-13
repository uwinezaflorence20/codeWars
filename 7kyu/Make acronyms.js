function toAcronym(inp){
  return inp.split(" ").map(first=>first[0]).join("").toUpperCase();
}
