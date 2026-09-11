function quote(name) {
  const lowerName = name.toLowerCase(); 
  if (lowerName === 'george saint pierre') {
    return "I am not impressed by your performance.";
  } 
  if (lowerName === 'conor mcgregor') {
    return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
  }
  return "No quote available.";
}