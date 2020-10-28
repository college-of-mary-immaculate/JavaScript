/*

JavaScript Console

- Is an object defined in JavaScript that offers functions to be used
  in logging in the browser console

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

// Logging strings
console.log("Hello CMIan!");

// Logging numbers
console.log(12);

// Showing warnings in console
console.warn("This is a warning message!");

// Throwing an error in console
console.error("This is an error message!");

// Logging objects
console.log({ a: 1, b: 2 });
console.table({ a: 1, b: 2 });

// Benchmarking using Console
// Just past any indicator as parameter
console.time("Performance");
// On this point, console will record the time it takes
// to process the codes define between console.time
console.log("This is recorded");
console.timeEnd("Performance");