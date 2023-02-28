console.log("1-swapping-variable");
var a = "one";
var b = "two";

console.log("original: " + a);
console.log("original: " + b);

var c = a;
    a = b;
    b = c;

console.log("swap " + a);
console.log("swap " + b);