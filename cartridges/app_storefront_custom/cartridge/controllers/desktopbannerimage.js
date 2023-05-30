'use strict';

var server = require('server');
var ContentMgr = require('dw/content/ContentMgr');

server.get('MyAssets', function (req, res, next) {

    let myAsset = ContentMgr.getContent('desktop-banner-image');
        res.render('/desktopbannerimage/desktopbannerimage', {myAsset: myAsset});
        return next();
    });

module.exports = server.exports();