const getMiddle = str => {
    const len = str.length;
    const mid = Math.floor(len/2);
    return len %2 === 0?str.slice(mid-1,mid+1): str[mid];
    
};