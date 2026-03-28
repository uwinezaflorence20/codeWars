const findSecretMessage = paragraph => {
    const words = paragraph
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/);

        
    const seen = new Set();
    const duplicates = new Set();