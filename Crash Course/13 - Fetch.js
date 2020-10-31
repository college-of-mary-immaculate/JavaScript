/*

JavaScript Fetch API

Fetch provides a definition of Request and Response objects.
Fetch API is also similar to XMLHttpRequest. Fetch is based from Promise.

- This contains examples for Fetch API in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
  .then(res => res.json())
  .then(data => console.log(data));

// Using async and await

(async () => {
  try {
    const apiResponse = await fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty");
    const data = await apiResponse.json();
    console.log(data);
  } catch (ex) {
    console.error(ex);
  }
})();