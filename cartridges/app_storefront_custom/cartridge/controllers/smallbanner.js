'use strict';

var server = require('server');
var ContentMgr = require('dw/content/ContentMgr');

server.get('MyAssets', function (req, res, next) {

    let myAsset = ContentMgr.getContent('small-banner');
        res.render('/smallbanner/header', {myAsset: myAsset});
        return next();
    });

module.exports = server.exports();