function last() {
    if (arguments.length > 1) return arguments[arguments.length - 1];
  
    const value = arguments[0];
  
    if (typeof value === "string") return value[value.length - 1];
  
    if (Array.isArray(value)) return value[value.length - 1];
  
    return value;
}
