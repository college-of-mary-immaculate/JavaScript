/*

JavaScript Data Types

- This contains examples for Data Types in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/


/***
 *  PRIMITIVE DATA TYPES
 *
 *  - Stored directly in the location the variable accesses
 *  - Stored on the stack
 *
 *
 *  > String (Character, String Literals)
 *  > Number (Integer, Double, Float)
 *  > Boolean (true and false)
 *  > Null (Without value)
 *  > Undefined (Never assigned)
 *  > Symbols (ES6)
 *
 */

let exampleString = "Hello CMIan!"
let exampleNumber = 12
let exampleNumber2 = 3.1416
let exampleBoolean = false
let exampleNull = null

console.log("exampleString is ", typeof (exampleString))
console.log("exampleNumber is ", typeof (exampleNumber))
console.log("exampleNumber2 is ", typeof (exampleNumber2))
console.log("exampleBoolean is ", typeof (exampleBoolean))
console.log("exampleNull is ", typeof (exampleNull))
console.log("exampleUndefined is ", typeof (exampleUndefined))



/***
 *  REFERENCE DATA TYPES
 *
 *  - Accessed by refrence
 *  - Stored on the heap
 *  - A pointer to the location in memory
 *
 */

const products = ["Apples", "Oranges", "Grapes"]

products.push("Pineapples")

console.log("Products: ", products)



const profile = {
  name: "John Doe",
  age: 20
}

profile.age = 21
console.log("Profile: ", profile)
