/*

JavaScript Fetch API

Fetch provides a definition of Request and Response objects.
Fetch API is also similar to XMLHttpRequest. Fetch is based from Promise.

- This contains examples for Fetch API in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

const WeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=Manila&units=metric&appid=843e77580f94a536404d4567381b1502';

fetch(WeatherAPI)
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.error(err)
  });

// Using async and await

(async () => {
  try {
    const apiResponse = await fetch(WeatherAPI);
    const data = await apiResponse.json();
    console.log(data);
  } catch (ex) {
    console.error(ex);
  }
})();