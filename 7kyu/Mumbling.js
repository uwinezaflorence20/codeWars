function accum(s) {
    return s.split('').map((sh,index)=>{
        return sh.toUpperCase() + sh.toLowerCase().repeat(index);
    }).join("-");
}