/**
 * Created by D on 31.1.2016 ã..
 */
var express = require('express');

var routes = function (pc) {
    var router = express.Router();
    router.get('/:hardwareType', function (req, res) {
        pc.find({}, function (err, pcs) {
            var parts = [];
            for (var i = 0; i < pcs.length; i++) {
                for (var j = 0; j < pcs[i].parts.length; j++) {
                    if (pcs[i].parts[j].type == req.params.hardwareType) {
                        parts.push({
                            id: pcs[i].parts[j]._id,
                            name: pcs[i].parts[j].name
                        });
                    }
                }
            }
            return res.json(parts);
        }).populate('parts');
    });

    return router;
};

module.exports = routes;
