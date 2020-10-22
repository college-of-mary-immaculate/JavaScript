/*

JavaScript Loops

- This contains examples for loops in JavaScript

- Copy-and-Paste the code to your Browser's Console to try it out!

*/

/*

for loop

SYNTAX:

  for (initialization, condition to satisfy, steps) {
    // todo
  }

*/

for (let i = 0; i < 10; i++) {
  console.log(i)
}

/*

while loop

SYNTAX:

  while (condition_to_check) {
    // todo
  }

*/

let i = 0;

while (i < 10) {
  console.log(i)

  i++
}

/*

for/in

SYNTAX:

  for (temp_variable in list) {
    // todo
  }

*/

let list = [10, 20, 30, 40]

for (let i in list) {
  console.log(list[i])
}

/*

for/of

SYNTAX:

  for (temp_variable of list) {
    // todo
  }

*/

let iteratable = [50, 60, 70, 80]

for (let val of iteratable) {
  console.log(val)
}