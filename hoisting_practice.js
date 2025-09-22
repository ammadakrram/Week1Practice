{/* Hoisting var */}
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// var is hoisted and initialized with undefined


{/* Hoisting let */}
console.log(x); // ReferenceError: Cannot access 'x' before initialization
let x = 5;
console.log(x);

// let is hoisted but not initialized. It is in temporal dead zone


{/* Hoisting const */}
console.log(x); // ReferenceError: Cannot access 'x' before initialization
const x = 5;
console.log(x);

// const is hoisted but not initialized. It is in temporal dead zone

