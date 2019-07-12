const express = require('express')
const getProducts = require('./getProducts')

const app = express()

const PORT = 3002;

app.get('/api/products', getProducts);


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})
