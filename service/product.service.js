const { default: axios } = require("axios");
const Product = require("../models/product.models");


const fetchAndSaveProduct = async () => {
    try {
        const {data} = await axios.get(process.env.PRODUCT_URL);
        if (!data) {
            return {
                success: false,
                data: 'Failed while fetching product from external url.',
                status: 400
            }
        }

        const savedProduct = await Product.insertMany(data);
        if (!savedProduct) {
            return {
                success: false,
                data: "Failed while trying to save product.",
                status: 500
            }
        }
        return {
            success: true,
            data: 'Product save to db.',
            status: 201
        }
        
    } catch (error) {
        return {
            success: false,
            data: 'Something went wrong.',
            status: 500
        }
    }
}

module.exports = {
    fetchAndSaveProduct,
}