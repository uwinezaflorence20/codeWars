function formatWords(words){
    if(!words || words.length === 0) return '';
    const filtered = words.filter(word => word.trim() !== '');
    if(filtered.length === 0) return '';
    if(filtered.length === 1) return filtered[0];
    
    return filtered.slice(0,-1).join(', ') + ' and ' + filtered[filtered.length-1];
}