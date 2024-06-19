const express = require('express');
const { fetchAndSaveProduct } = require('./controller/product.controller');

module.exports = (app) => {
    app.get('/v1/products/save', fetchAndSaveProduct)
    
}