var express = require('express'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    multer = require('multer'),
    crypto = require('crypto'),
    mime = require('mime'),
    multerConf = require('./config/multer.js')(multer, crypto, mime),
    LocalStrategy = require('passport-local').Strategy;

app = express();

require('./config/config.js')(app, __dirname);
var db = mongoose.connect('mongodb://localhost/PersonalComputersSystem');

var PartTypes = require('./models/PartType');
var Part = require('./models/part');
var User = require('./models/user');
var routes = require('./routes/index');
var users = require('./routes/users');
var pcModel = require('./models/pc');
var imgModel = require('./models/image');
var userProfile = require('./models/UserProfile');
var pcRoute = require('./routes/pc')(pcModel);
var charsRoute = require('./routes/chars')(pcModel);
var authentication = require('./routes/auth')(User);
var partTypesRoute = require('./routes/PartType')(PartTypes, Part);
var partRoute = require('./routes/Part')(Part);
var imgUploadRoute = require('./routes/upload/image')(multerConf.pcConfigurationConf(), pcModel, imgModel);
var avatarUploadRoute = require('./routes/upload/avatar')(multerConf.profileAvatar(), User, userProfile, imgModel);
var userProfileRoute = require('./routes/profile')(userProfile);
var avatarRoute = require('./routes/avatar')(imgModel);

app.get('/partials/*', function(req, res){
  res.render(req.params[0]);
});

app.use('/', routes);
app.use('/', authentication);
app.use('/user', users);
app.use('/pc', pcRoute);
app.use('/hardware', partTypesRoute);
app.use('/chart', charsRoute);
app.use('/upload', imgUploadRoute);
app.use('/upload', avatarUploadRoute);
app.use('/profile', userProfileRoute);
app.use('/avatar', avatarRoute);


if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
