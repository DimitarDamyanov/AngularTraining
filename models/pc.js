/**
 * Created by D on 31.1.2016 ã..
 */
var mongoose = require('mongoose'),
    Schema =  mongoose.Schema,
    Part = require('./part');

var pc = new Schema({
    name: {type: String},
    parts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Part'}],
    time : { type : Date, default: Date.now }
});

/*
Part.find({}, function(err, parts){
    if(err){
        console.log(err);
    }

    if(parts.length == 0){
        var p1 = new Part({
            name: 'Intel Core i7-6700K',
            img: 'http://cdn.wccftech.com/wp-content/uploads/2015/08/Intel-Skylake-Core-i7-6700K.jpg',
            type: 'Processor'
        });

        var p2 = new Part({
            name: 'Intel Core i7-6700K',
            img: 'http://cdn.wccftech.com/wp-content/uploads/2015/08/Intel-Skylake-Core-i7-6700K.jpg',
            type: 'Processor'
        });

        var p3 = new Part({
            name: 'Intel Core i7-6700K',
            img: 'http://cdn.wccftech.com/wp-content/uploads/2015/08/Intel-Skylake-Core-i7-6700K.jpg',
            type: 'Processor'
        });

        var p4 = new Part({
            name: 'Intel Core i7-6700K',
            img: 'http://cdn.wccftech.com/wp-content/uploads/2015/08/Intel-Skylake-Core-i7-6700K.jpg',
            type: 'Processor'
        });
    }

}); */



module.exports = mongoose.model('PersonalComputer', pc);