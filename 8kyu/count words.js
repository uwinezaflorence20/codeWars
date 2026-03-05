function countWords(str) {
str = str.trim();
if(str === "") return 0;
return str.split(/\s+/).length;
}