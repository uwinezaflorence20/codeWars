function solution(str, ending){
    if(str.length === 0 && ending.length ===0) return true
    if(str.length > 0 && ending.length ===0) return true
    if(str.length === 0 && ending.length >0) return false
    return str.endsWith(ending);
}