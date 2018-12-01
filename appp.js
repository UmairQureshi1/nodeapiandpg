const express = require('express');
const appp = express();
 
const productRoutes = require('./api/routes/products');

appp.use('/products', productRoutes);

module.exports = appp;