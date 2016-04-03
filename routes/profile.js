/**
 * Created by D on 2.4.2016 ã..
 */


var express = require('express');

var routes = function (Profile) {
    var router = express.Router();
    router.get('/:id', function (req, res, next) {
        console.log('sdfsdf');
        console.log(req.params.id);


        Profile.findOne({_id: req.params.id}, function (err, profile) {
            //handle error
            console.log(profile);
            return res.json(profile);
        });
    });
    return router;
};

module.exports = routes;


