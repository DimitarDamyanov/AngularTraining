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

imageModel.find({name: 'default-avatar'},function(err, images){
    console.log(images);
    if(images && images.length == 0){
        var image = new imageModel({
            name: 'default-avatar',
            title:  'default avatar',
            mimetype: 'image/png'
        });
        image.save();
    }
});

module.exports = imageModel;