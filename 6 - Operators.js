/*

JavaScript Operators

- This contains examples for operators in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

/*** ARITHMETIC OPERATORS ***/

console.log("1 + 1 =", 1 + 1)    // Addition
console.log("1 - 1 =", 1 - 1)    // Subtraction
console.log("2 * 2 =", 2 * 2)    // Multiplication
console.log("2 ** 4 =", 2 ** 4)  // Exponentiation (ES2016)
console.log("2 / 2 =", 2 / 2)    // Division
console.log("2 % 2 =", 2 % 2)    // Modulus (Division Remainder)

var i = 2
console.log("i =", i)
console.log("i++ =", i++)        // Increment
console.log("i-- =", i--)        // Decrement


/*** ASSIGNMENT OPERATORS ***/

var i = 4
console.log("i =", i)
console.log("i += 1 =", i += 1)     // x = x + n
console.log("i -= 1 =", i -= 1)     // x = x - n
console.log("i *= 1 =", i *= 1)     // x = x * n
console.log("i /= 1 =", i /= 1)     // x = x / n
console.log("i **= 3 =", i **= 3)   // x = x ** n
console.log("i %= 1 =", i %= 1)     // x = x % n


/*** COMPARISON OPERATORS ***/

console.log("1 == '1' =", 1 == '1')      // Equal
console.log("1 === '1' =", 1 === '1')    // Equal value and type
console.log("1 != '1' =", 1 != '1')      // Not equal
console.log("1 !== '1' =", 1 !== '1')    // Not equal value or not equal type
console.log("2 > 3 =", 2 > 3)            // Greater than
console.log("2 < 3 =", 2 < 3)            // Less than
console.log("2 >= 3 =", 2 >= 3)          // Greater than equals
console.log("2 <= 3 =", 2 <= 3)          // Less than equals
console.log("2 == '1' ? 0 : 1 =", 2 == '1' ? 0 : 1) // Ternary (Shorthand if else condition)


/*** LOGICAL OPERATORS ***/

console.log("1 AND 2 =", 1 && 2)         // AND
console.log("1 OR 2 =", 1 || 2)          // OR
console.log("NOT 0 =", !0)               // NOT



/*** TYPE OPERATORS ***/

// `typeof` would return the type of the variable passed through it in string
console.log("'undefined' === typeof(notExistentVar) =", 'undefined' === typeof (notExistentVar))

// Check if a variable is an instance of a class
var date = new Date()
console.log("date instanceof Date =", date instanceof Date)