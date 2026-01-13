function isDivisible(n,...args){
    if (args.length === 0) return true;
    return args.every(num => n % num === 0);
}