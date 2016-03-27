/**
 * Created by D on 21.3.2016 ã..
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var image = new Schema({
    name: {type: String},
    title: {type: String},
    mimetype: {type: String}
});

var imageModel = mongoose.model('Image', image);
module.exports = imageModel;