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

PartModel.find({}, function (err, collection) {
    if (collection.length == 0) {

            PartType.find({id: 'cpu'},function(err, collection){
                //TODO: Check for errors
                var p1 = new PartModel({
                    name: 'Intel Core i7-6700K',
                    img: 'http://cdn.wccftech.com/wp-content/uploads/2015/08/Intel-Skylake-Core-i7-6700K.jpg',
                    type: collection[0]
                });
                p1.save();

                var p2 = new PartModel({
                    name: 'Intel Core i3-4005U',
                    img: 'http://ecx.images-amazon.com/images/I/71CiU4GcgjL._SL1186_.jpg',
                    type: collection[0]
                });
                p2.save();

                var p3 = new PartModel({
                    name: 'Intel Core i7-4790K',
                    img: 'http://tulipcomputersystems.com/media/catalog/product/i/n/intel_core-i7-4790k_boxed_w_600.jpg',
                    type: collection[0]
                });
                p3.save();

                var p4 = new PartModel({
                    name: 'Intel Core i5-4690K',
                    img: 'http://cdn.wccftech.com/wp-content/uploads/2015/08/Intel-Skylake-Core-i7-6700K.jpg',
                    type: collection[0]
                });
                p4.save();
            });

        PartType.find({id: 'gpu'},function(err, collection){
            //TODO: Check for errors
            var p1 = new PartModel({
                name: 'MSI GTX 970 GAMING 4G',
                img: 'https://asset.msi.com/resize/image/global/product/five_pictures6_3265_201509221134095600cc31eda83.png62405b38c58fe0f07fcef2367d8a9ba1/600.png',
                type: collection[0]
            });
            p1.save();

            var p2 = new PartModel({

                name: 'MSI GTX 980 Ti Gaming 6G',
                img: 'http://ic.tweakimg.net/ext/i/2000618827.jpeg',
                type: collection[0]
            });
            p2.save();

            var p3 = new PartModel({
                name: 'EVGA 02G-P4-2966-KR',
                img: 'http://cdn.wccftech.com/wp-content/uploads/2015/08/Intel-Skylake-Core-i7-6700K.jpg',
                type: collection[0]
            });
            p3.save();

            var p4 = new PartModel({
                name: 'EVGA 04G-P4-2974-KR',
                img: 'http://static.evga.com/products/images/gallery/02G-P4-2966-KR_XL_1.jpg',
                type: collection[0]
            });
            p4.save();

            var p5 = new PartModel({
                name: 'MSI R9 390 GAMING 8G',
                img: 'http://ecx.images-amazon.com/images/I/81vVGO9HnEL._SX425_.jpg',
                type: collection[0]
            });
            p5.save();
        });

        PartType.find({id: 'powerSupply'},function(err, collection){
            //TODO: Check for errors
            var p1 = new PartModel({
                name: 'EVGA 600 B1 80+ BRONZE, 600W',
                img: 'http://ecx.images-amazon.com/images/I/7139DRhvmcL._SL1200_.jpg',
                type: collection[0]
            });
            p1.save();

            var p2 = new PartModel({

                name: 'Corsair CX600 CP-9020048-US 600W',
                img: 'http://ecx.images-amazon.com/images/I/51YFU0kvQJL.jpg',
                type: collection[0]
            });
            p2.save();

            var p3 = new PartModel({
                name: 'Corsair RM Series, RM850, 850 Watt',
                img: 'http://ecx.images-amazon.com/images/I/41vYdEvYgLL.jpg',
                type: collection[0]
            });
            p3.save();

            var p4 = new PartModel({
                name: 'Corsair HXi Series, HX1000i, 1000 Watt',
                img: 'http://ecx.images-amazon.com/images/I/51ZBQ3JAD4L.jpg',
                type: collection[0]
            });
            p4.save();

        });

        PartType.find({id: 'hdd'},function(err, collection){
            //TODO: Check for errors
            var p1 = new PartModel({
                name: 'Western Digital WD10EZEX',
                img: 'https://s3.amazonaws.com/ba-presta/themes/PRS010019_143/img/LandCatPage/memcard/2.jpg',
                type: collection[0]
            });
            p1.save();

            var p2 = new PartModel({

                name: 'Samsung MZ-75E250B/AM',
                img: 'http://ecx.images-amazon.com/images/I/91ZPflI8tzL._SX466_.jpg',
                type: collection[0]
            });
            p2.save();

            var p3 = new PartModel({
                name: 'Seagate ST1000DM003',
                img: 'https://www.mbit.pt/fotos/produtos/347b854d4c24f752457e7c2e99aa86db.jpeg',
                type: collection[0]
            });
            p3.save();

            var p4 = new PartModel({
                name: 'Samsung MZ-75E500B/AM',
                img: 'http://images17.newegg.com/is/image/newegg/20-147-373-TS?$S640W$',
                type: collection[0]
            });
            p4.save();

        });

        PartType.find({id: 'memory'},function(err, collection){
            //TODO: Check for errors

            var p2 = new PartModel({
                name: 'Kingston HyperX FURY 16GB Kit',
                img: 'http://ecx.images-amazon.com/images/I/41MCBjSadvL.jpg',
                type: collection[0]
            });
            p2.save();

            var p3 = new PartModel({
                name: 'Corsair Vengeance Pro 16GB',
                img: 'http://ecx.images-amazon.com/images/I/61G0o-7BYnL._SL1000_.jpg',
                type: collection[0]
            });
            p3.save();

            var p4 = new PartModel({
                name: 'Corsair Vengeance 8 GB',
                img: 'http://ecx.images-amazon.com/images/I/51HIt1luJ7L.jpg',
                type: collection[0]
            });
            p4.save();

            var p5 = new PartModel({
                name: 'Corsair Vengeance Performance 16GB',
                img: 'http://ecx.images-amazon.com/images/I/51DlGPWJHuL.jpg',
                type: collection[0]
            });
            p4.save();
        });

        PartType.find({id: 'moba'},function(err, collection){
            //TODO: Check for errors

            var p2 = new PartModel({
                name: 'ASRock Fatal1ty Z170 ',
                img: 'http://images10.newegg.com/productimage/13-157-676-04.jpg',
                type: collection[0]
            });
            p2.save();

            var p3 = new PartModel({
                name: 'ASUS ROG MAXIMUS VIII HERO ALPHA',
                img: 'http://images10.newegg.com/productimage/13-132-699-04.jpg',
                type: collection[0]
            });
            p3.save();

            var p4 = new PartModel({
                name: 'GIGABYTE G1 Gaming GA-Z97X-Gaming',
                img: 'http://images17.newegg.com/is/image/newegg/13-128-700-TS?$S640$',
                type: collection[0]
            });
            p4.save();

            var p5 = new PartModel({
                name: 'ASUS M5A99FX PRO R2.0',
                img: 'https://www.asus.com/media/global/products/LVnr9hOsmMV1eWsw/P_setting_fff_1_90_end_500.png',
                type: collection[0]
            });
            p4.save();
        });
    }
});

module.exports = PartModel;
