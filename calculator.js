// Simple calculator
let a = 10;   // first number
let b = 5;    // second number
let op = "+"; // operator: +, -, *, /

let result;

if (op === "+") result = a + b;
else if (op === "-") result = a - b;
else if (op === "*") result = a * b;
else if (op === "/") result = a / b;
else result = "Invalid operator";

console.log("Result:", result);
