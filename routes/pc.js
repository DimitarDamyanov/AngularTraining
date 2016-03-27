/**
 * Created by D on 31.1.2016 ã..
 */
var express = require('express');

var routes = function (pc) {
    var router = express.Router();

    router
        .post('/', function (req, res) {
            var newPc = new pc(req.body);
            newPc.save();
            res.send('Pc saved!');
        })
        .get('/', function (req, res, next) {
            pc.find({}, function (err, pcs) {
                res.json(pcs);
            }).populate('parts');
        })
        .get('/:id', function (req, res, next) {
            console.log('here');
            pc.findOne({_id: req.params.id}, function (err, pcs) {
                res.json(pcs);
            }).populate('parts');
        })
        .delete('/:id', function (req, res, next) {
            pc.remove({_id: req.params.id}, function (err) {
                res.send('pc removed');
            });
        })
        .get('/user/:username/configs', function (req, res, next) {
            pc.find({username: req.params.username}, function (err, pcs) {
                res.json(pcs);
            }).populate('images').populate('parts');
        })
        .get('/user/:username/all-configs', function (req, res, next) {
            pc.find({username: req.params.username}, function (err, pcs) {
                res.json(pcs);
            }).select('name').select('_id');
        })
        .get('/user/:username/configs/count', function (req, res, next) {
            pc.count({username: req.params.username}, function (err, result) {
                res.json(result);
            });
        });


    return router;
};

module.exports = routes;
