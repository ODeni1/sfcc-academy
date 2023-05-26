'use strict';

var server = require('server');

server.get('ShowProduct', function (req, res, next) {
    var ProductMgr = require('dw/catalog/ProductMgr')
    res.render('/product/productTile', {product: product})
    next();
});

server.get('RenderTemplate', function (req, res, next) {
    res.render('/product/renderTemplate');
    next();
});

server.get('TestRemoteInclude', function (req, res, next) {
    res.render('/product/testRemoteInclude');
    return next();
});


module.exports = server.exports();