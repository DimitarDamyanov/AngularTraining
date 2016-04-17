/**
 * Created by D on 20.2.2016 ã..
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    PartType = require('./PartType');

var hardwarePart = new Schema({
    name: {type: String},
    img: {type: String},
    type: {type: mongoose.Schema.Types.ObjectId, ref: 'PartType'}
});

var PartModel = mongoose.model('Part', hardwarePart);

module.exports = PartModel;
