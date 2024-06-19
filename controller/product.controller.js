const ProductService = require('../service/product.service')

const fetchAndSaveProduct = async (req, res) => {
    const fetch = await ProductService.fetchAndSaveProduct();
    res.json(fetch);
}

module.exports = {
    fetchAndSaveProduct
}