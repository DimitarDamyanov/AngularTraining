/**
 * Created by D on 17.4.2016 ã..
 */
var express = require('express');

var routes = function (Avatar) {
    var router = express.Router();
    router.get('/:id', function (req, res) {
        console.log(req.params.id);
        Avatar.findOne({_id: req.params.id}, function (err, avatar) {
            console.log(err);
            res.json(avatar);
        });
    });

    return router;
};

module.exports = routes;
