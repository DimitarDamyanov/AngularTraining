/**
 * Created by D on 20.2.2016 ã..
 */
var express = require('express');

var routes = function (Part) {
    var router = express.Router();

    router.get('/parts/:type',function(req, res, next){
        Part.find({type: req.params.type}, function(err, types){
            err && console.log(err);
            res.json(types);
        });
    });

    return router;
};

module.exports = routes;
