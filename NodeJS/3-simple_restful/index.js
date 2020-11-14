const express = require('express')
const app = express()
const port = 3000

// import routes from different file
const routes = require("./routes")

// for parsing application/json
app.use(express.json())

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Use the routes we have imported
app.use(routes)

// Start listening
app.listen(port, () => {
  console.log(`Simple RESTful API is running at http://localhost:${port}`)
})