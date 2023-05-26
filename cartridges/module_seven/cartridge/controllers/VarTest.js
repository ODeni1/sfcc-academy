'use strict';

var server = require('server');

server.get('Var', function (req, res, next) {
    res.render('vartest/vartest')
    return next();
});

module.exports = server.exports();