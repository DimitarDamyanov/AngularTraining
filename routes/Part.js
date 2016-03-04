/**
 * Created by D on 20.2.2016 �..
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

    function getTop5PartsByType(type) {
        Part.find({type: type}, function (err, types) {
            err && console.log(err);

            //res.json(types);
        });
    }


    return router;
};

module.exports = routes;
