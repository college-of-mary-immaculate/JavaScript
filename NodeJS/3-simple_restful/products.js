const fs = require("fs")
const path = require("path")

// Our database file
const db = path.join(__dirname, "products.json")

// Get products from database file `products.json`
const getProducts = () => {
  try {
    const productsFile = fs.readFileSync(db)
    return JSON.parse(productsFile)
  } catch {
    fs.writeFileSync(db, JSON.stringify({}))
  }

  return {}
}

// Update products to database file `products.json`
const updateProducts = (data) => {
  try {
    fs.writeFileSync(db, JSON.stringify(data))
  } catch {
    console.log("asdsad")
    throw new Error("Can't update db.")
  }
}

module.exports = {
  getProducts,
  updateProducts
}