/**
 * Created by D on 20.2.2016 ã..
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PartType = new Schema({
   id: {type: 'String'},
   name: {type: 'String'},
   description: {type: 'String'}
});

var partTypeModel = mongoose.model('PartType', PartType);

partTypeModel.find({}, function (err, collection) {
    if (collection.length == 0) {
       var processor = new partTypeModel({
           name: 'Processor',
           id: 'cpu'
       });
       processor.save();

        var gpu = new partTypeModel({
            name: 'Video Card',
            id: 'gpu'
        });
        gpu.save();

        var powerSupply = new partTypeModel({
            name: 'Power Supply',
            id: 'powerSupply'
        });
        powerSupply.save();

        var hdd = new partTypeModel({
            name: 'Hard Drive',
            id: 'hdd'
        });
        hdd.save();

        var memory = new partTypeModel({
            name: 'Dynamic Memory',
            id: 'memory'
        });
        memory.save();


        var moba = new partTypeModel({
            name: 'Motherboard',
            id: 'moba'
        });
        moba.save();

       console.log('Default part types saved!');
    }
});

module.exports = partTypeModel;






