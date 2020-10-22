/*

JavaScript Async Function

- This contains examples for async function in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

// An example of a normal JavaScript function
function test() {
  return "Sync Function"
}

// An example of async function
async function testAsync() {
  return "Async Function"
}

// Almost the same right? what differs is that in async function
// where indicating that we'll be doing an asynchronous processing
// and an async function should return a `Promise`
// Read more about Promises here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

testAsync().then(val => console.log(val))

