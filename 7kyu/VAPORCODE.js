function vaporcode(string) {
  return string.replace(/ /g,"").toUpperCase().split("").join("  ");
}