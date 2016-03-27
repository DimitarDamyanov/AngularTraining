/**
 * Created by D on 11.2.2016 ã..
 */
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    session = require('express-session');
    passport = require('passport');



var Configuration = function(app, directory){
    console.log(directory);
    // view engine setup
    app.set('views', [path.join(directory, 'views'),path.join(directory,'/public/javascripts')]);
    app.set('view engine', 'jade');
    app.use(express.static(directory + '/public'));
    app.use('/bower_components',  express.static(directory + '/bower_components'));
    // uncomment after placing your favicon in /public
    //app.use(favicon(path.join(directory, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(session({secret: 'secret'}));
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(express.static(path.join(directory, 'public')));



};

module.exports = Configuration;

