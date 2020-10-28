/*

JavaScript Functions

- This contains examples for functions in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

// Creating a function using `function` keyword
function computeArea(height, width) {
  return height * width
}

console.log("Area of Rectangle:", computeArea(200, 300))


// Creating a function using `arrow function` in ES6
const getArea = (height, width) => (height * width)

console.log("Area of Rectangle:", getArea(200, 300))
