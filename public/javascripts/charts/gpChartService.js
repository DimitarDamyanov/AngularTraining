/**
 * Created by D on 6.3.2016 ã..
 */

/**
 * Created by D on 14.2.2016 ã..
 */

myApp.factory('ChartService', function ($q, $http) {
    var chartsInfo = {};

    function retrieveChartInfoByType(typeId) {
        var dfd = $q.defer();
        if (chartsInfo && chartsInfo[typeId]) {
            dfd.resolve(true);
        } else {
            $http.get(['/chart/', typeId].join('')).then(function (response) {
                if (response && response.data) {
                    var labels = [],
                        data = [];
                    var res = response.data;
                    var stats = _.countBy(res, function (res) {
                        return res.name
                    });

                    for (var stat in stats) {
                        labels.push(stat);
                        data.push(stats[stat]);
                    }
                    chartsInfo[typeId] = {
                        labels: labels,
                        data: data
                    }
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
        }
        return dfd.promise;
    }

    function getChartInfoByType(typeId) {
        return chartsInfo[typeId];
    }

    return {
        retrieveChartInfoByType: retrieveChartInfoByType,
        getChartInfoByType: getChartInfoByType
    }

});
