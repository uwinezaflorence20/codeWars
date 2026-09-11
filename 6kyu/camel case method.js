String.prototype.camelCase = function() {
  return this
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)
)
    .join('');
}

// Usage:
console.log("hello world".camelCase());           // "HelloWorld"
console.log("foo-bar-baz".camelCase());           // "FooBarBaz"
console.log("my_variable_name".camelCase());      // "MyVariableName"
console.log("javascript is awesome".camelCase()); // "JavascriptIsAwesome"