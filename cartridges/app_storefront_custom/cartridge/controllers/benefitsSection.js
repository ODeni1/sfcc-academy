'use strict';

var server = require('server');
var ContentMgr = require('dw/content/ContentMgr');

server.get('MyAssets', function (req, res, next) {

    let assetFolder = ContentMgr.getContent('Benefits-Section');
        res.render('/service/rendering', {assetFolder: assetFolder});
        return next();
    });

module.exports = server.exports();