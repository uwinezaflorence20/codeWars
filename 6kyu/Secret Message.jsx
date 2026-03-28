const findSecretMessage = paragraph => {
    const words = paragraph
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/);

        
    const seen = new Set();
    const duplicates = new Set();

     const result = [];

    for (const word of words) {
        if (seen.has(word) && !duplicates.has(word)) {
              result.push(word);
            duplicates.add(word);