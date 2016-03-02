/**
 * Created by D on 31.1.2016 ã..
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Part = require('./part');

var pc = new Schema({
    name: {type: String}, /*Should be required field*/
    username: {type: String}, /*Should be required field*/
    parts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Part'}],
    time: {type: Date, default: Date.now}
});

module.exports = mongoose.model('PersonalComputer', pc);