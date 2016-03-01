/**
 * Created by D on 31.1.2016 ã..
 */
var express = require('express');

var routes = function (pc) {
    var router = express.Router();

    router.post('/', function (req, res) {
        console.log(req.body);
       // console.log(pc);
      var newPc = new pc(req.body);
        newPc.save();
        res.send('Pc saved!');
    });

    router.get('/',function(req, res, next){
       pc.find({}, function(err, pcs){
          res.json(pcs);
       });
    });


    return router;
};

module.exports = routes;
