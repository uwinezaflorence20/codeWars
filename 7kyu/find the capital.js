var capitals = function (word) {
	// Write your code here
	var result=[];
	for(let i =0 ; i<word.length ;i++){
	    if(word[i] === word[i].toUpperCase()){
	        result.push(i);
	    }
	}
	return  result;
};