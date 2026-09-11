function isSortedAndHow(array) {
if(array.length < 2 ){
    return 'array must be equal or greater than 2';
}

    let ascending = true;
    let descending = true;
    for(let i=0; i<= array.length-1;i++){
        if(array[i] < array[i+1]){
            descending = false;
        }
        else if(array[i] > array[i+1]){
            ascending = false
        }    
    }
    if(ascending){
    return "yes, ascending";
}
else if(descending){
    return "yes, descending";
}
else{
    return 'no'
}

}