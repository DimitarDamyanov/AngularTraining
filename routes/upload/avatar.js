/**
 * Created by D on 15.3.2016 ã..
 */

var express = require('express'),
    Jimp = require('jimp');

var routes = function (upload, User, UserProfile, Image) {
    var router = express.Router();
    router.post('/avatar/image', upload.single('file'), function (req, res, next) {
        //find configuration
        var img = new Image({name: req.file.filename, title: 'Anonymous', mimetype: req.file.mimetype});
        console.log(req.file);
        resizeImg(req.file.path, req.file.destination, req.file.filename);
        img.save(function (err, img) {
            console.log('Image with id ' + img._id + ' saved!');
            User.findOne({_id: req.body.userid}, function (err, user) {
                UserProfile.findOne({_id: user.profile._id}, function (err, profile) {
                    console.log('Current profile ' + profile);
                    console.log(img._id);
                    profile.avatar = img._id;
                    console.log('New profile ' + profile);
                    profile.save(function () {
                        console.log('profile saved');
                    });
                });
            }).populate('profile');
        });
    });

    return router;
};


function resizeImg(path, destination, name) {
    var dest = [destination, '/', 'sm-', name].join('');
    console.log(dest);
    Jimp.read(path).then(function (img) {
        img.resize(30, 30) // resize
            .write(dest); // save
    }).catch(function (err) {
        console.error(err);
    });
}


module.exports = routes;

