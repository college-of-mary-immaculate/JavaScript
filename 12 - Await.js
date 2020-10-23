/*

JavaScript Await Expression

Wait for Promises (Could only be used inside an async function)

- This contains examples for await expression in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

// Using async and Promise together
async function boo(val = null) {
  return new Promise((res, rej) => {
    if (val == null) rej("Error!")

    res("Boo!")
  })
}

boo()
  .then(val => console.log(val))
  .catch(err => console.log(`Received: ${err}`));

(async () => {
  const data = await boo(1)
  console.log(data)
})()