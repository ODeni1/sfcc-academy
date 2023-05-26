'use strict'
var server =require('server');

server.get('Show', function (req, res, next) {
    var myvariable2 = "remote include";
    res.render("testtemplate/remotetemplate", { myvariable2: myvariable2 });
    next();
});
module.exports = server.exports();