function wordsToMarks(string){
return [...string].reduce((sum,letter)=>sum + letter.toLowerCase().charCodeAt(0) - 96,0);
}
