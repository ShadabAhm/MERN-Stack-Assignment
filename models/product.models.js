const mongoose = require('mongoose');
const { DB_COLLECTION } = require('../config/db/collection');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    sold: {
        type: Boolean,
        default: false
    },
    dateOfSale: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model(DB_COLLECTION.PRODUCT, productSchema);