/**
 * Created by D on 20.2.2016 ã..
 */
var express = require('express');

var routes = function (PartType, Part) {
    var router = express.Router();

    router.get('/type',function(req, res, next){
        PartType.find({}, function(err, types){
            res.json(types);
        });
    });

    router.get('/parts/:type',function(req, res, next){

        PartType.findOne({id: req.params.type}, function(err, type){
            err && console.log(err);
            console.log(type);
            Part.find({type: type._id}, function(err, parts){
                err && console.log(err);
                var result = {
                    type: req.params.type,
                    parts: parts
                };
                res.json(result);
            });
        });
    });

    return router;
};

module.exports = routes;
