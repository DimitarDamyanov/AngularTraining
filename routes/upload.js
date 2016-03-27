/**
 * Created by D on 15.3.2016 ã..
 */

var express = require('express');

var routes = function (upload, pc, Image) {
    var router = express.Router();
    router.post('/configuration/image', upload.single('file'), function (req, res, next) {
        //find configuration
        var img = new Image({name: req.file.filename, title: 'Anonymous', mimetype: req.file.mimetype});
        img.save(function (err, img) {
            console.log(img._id);
            pc.findOne({_id: req.body.pcId}, function (err, pc) {
                if (err)
                    return res.send('error');
                console.log(pc);
                if (!pc.images) {
                    pc.images = [];
                }
                pc.images.push(img._id);
                pc.save(function (err, pc) {
                });
            });
        });
    });
    return router;
};

module.exports = routes;

