const products = require('../products.json');

const getProduct = (req, res) => {
    // returns the item if it finds it, or undefined if not
    const item = products.find(val => val.id === parseInt(req.params.id));
    console.log('item')
    if (!item) {
        return res.status(500).send("Item is not in list");
    }
    res.status(200).send(item);
}

module.exports = getProduct;