'use strict'
var server =require('server');

server.get('showpro', function (req, res, next) {
    
    var CatalogMgr= require('dw/catalog/CatalogMgr');
    var ProductMgr= require('dw/catalog/ProductMgr');
    var viewData = res.getViewData();
    var product = ProductMgr.getProduct(viewData.product.id.toString());
    //var viewData=res.getViewData();
    var example="my product";
    res.render("testtemplate/productTile", { example: example });
    return next();
});
module.exports = server.exports();