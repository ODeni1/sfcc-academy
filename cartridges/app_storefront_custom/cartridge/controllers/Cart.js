'use strict';

var server = require('server');

var controller = require('app_storefront_base/cartridge/controllers/Cart')
server.extend(controller);


module.exports = server.exports();
