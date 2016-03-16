/**
 * Created by D on 15.3.2016 ã..
 */

var express = require('express');

var routes = function (upload) {
    var router = express.Router();
    router.post('/configuration/image', upload.single('picture'), function (req, res, next) {
        console.log(req.file);
        res.send('picture uploaded');
    });
    return router;
};

module.exports = routes;

