const express = require('express')
const path = require("path")
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "pages/index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})