const express = require('express')
const products = require('../products.json')

const app = express()

const PORT = 3002;

app.get('/api/products', (request, result) => {
    result.status(200).send(products)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
