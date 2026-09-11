function shortenToDate(longDate) {
  return longDate.replace(/,/g, "").split(" ").slice(0,-1).join(" ");

}