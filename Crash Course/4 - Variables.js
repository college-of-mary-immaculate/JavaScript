/*

JavaScript Variables

- This contains examples for defining variables in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

/*** Declaring Global Scope Variables ***/
var name = "John Doe"
var age = 24
var index = 0

if (age >= 24) {
  var index = 20
}

console.log("Name: ", name)
console.log("Age: ", age)
console.log("Level: ", index)



/*** Declaring Scope Variables ***/
let studentName = "John Doe"
let studentAge = 24
let studentIndex = 0

if (studentAge >= 24) {
  let studentIndex = 20
}

console.log("Name: ", studentName)
console.log("Age: ", studentAge)
console.log("Level: ", studentIndex)



/***
 * Defining Constant
 *
 *
 * - In JavaScript, there are 2 data types
 *    Primitive Data Types:
 *      Basic Building Block (e.g. string, Number, boolean, function, undefined)
 *      are data types used in defining variables storing primitive values
 *
 *    Reference Data Types:
 *      Are data types are addresses used to locate values in heap memory
 *
 */

const yourName = "Juan Dela Cruz"
// @todo Uncomment this to try this out!
// yourName = "Maria Dela Cruz"


/*** Constant and Reference Data Types ***/
const products = ["Apples", "Oranges", "Grapes"]

products.push("Pineapples")

console.log("Products: ", products)

// We could change values of a constant reference data type, but never can re-assign it like this...
// products = []



/*** Another Example: Constant and Reference Data Types ***/
const profile = {
  name: "John Doe",
  age: 20
}

profile.age = 21
console.log("Profile: ", profile)
