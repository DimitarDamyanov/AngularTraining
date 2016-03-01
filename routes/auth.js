/**
 * Created by D on 11.2.2016 ã..
 */
var express = require('express');
var passport = require('passport');

var routes = function (User) {
    var router = express.Router();
    router.post('/login', function (req, res, next) {
        var auth = passport.authenticate('local', function (err, user) {
            if (err) {
                return next(err)
            }
            if (!user) {
                res.send({success: false})
            }
            req.logIn(user, function (err) {
                res.send({success: true, user: user});
            });
        });
        auth(req, res, next);
    });

    router.post('/logout', function (req, res, next) {
        req.logout();
        res.end();
    });
    return router;
};
module.exports = routes;
