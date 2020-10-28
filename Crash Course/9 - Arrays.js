/*

JavaScript Arrays

- This contains examples for arrays in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

// Creating a new list/array
let list = ['a', 'b', 'c', 'd']

// Push
list.push('e')
console.log(list)

// Pop
list.pop()
console.log(list)

// UnShift
list.unshift('0')
console.log(list)

// Shift
list.shift()
console.log(list)

/*

Iterate Array

*/

list.forEach(function (val) {
  console.log(val)
})

// Could also be written in ES6 as

list.forEach(val => {
  console.log(val)
})