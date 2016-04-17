/**
 * Created by D on 15.3.2016 ã..
 */

var express = require('express'),
    Jimp = require('jimp');

var routes = function (upload, pc, Image) {
    var router = express.Router();
    router.post('/configuration/image', upload.single('file'), function (req, res, next) {
        //find configuration
        var img = new Image({name: req.file.filename, title: 'Anonymous', mimetype: req.file.mimetype});
        console.log(req.file);
        resizeImg(req.file.path, req.file.destination, req.file.filename);
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


function resizeImg(path, destination, name) {
    var dest = [destination, '/', 'md-', name].join('');
    console.log(dest);
    Jimp.read(path).then(function (img) {
        img.resize(256, 256)            // resize
            .write(dest); // save
    }).catch(function (err) {
        console.error(err);
    });
}


module.exports = routes;

