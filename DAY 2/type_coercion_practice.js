null == undefined; // true
2 == "2";     // true (Number("2") → 2)
0 == "";      // true (Number("") → 0)
[2] == "2";    // true ( [2].toString() → "2" )
[] == 0;       // true ( [].toString() → "" → 0 )
[1,2] == "1,2"; // true
Object.is(NaN, NaN); //true

{/* Notes */}
// When comparing a boolean with a non-boolean, JavaScript converts the boolean to a number
// NaN never equals itself(using equals operators)
// If one is a number and the other is a string, the string is converted to a number
// If one is an object and the other is a primitive, the object is converted to a primitive via .valueOf() or .toString(), then compared again
