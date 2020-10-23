/*

JavaScript Promise

Represents eventual completion and/or capturing errors of an asynchrounous operation

- This contains examples for Promise in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

const testPromise = new Promise((resolve) => {
  resolve("Hello World!");
})

testPromise.then(val => console.log(val))


const testPromiseWithError = new Promise((resolve, reject) => {
  reject("Boo!");
})

testPromiseWithError.catch(val => console.log(val))