/**
 * Created by D on 4.3.2016 ã..
 */
var HWChartCtrl = function ($scope, $http, ComputerService, ChartService) {
    $scope.chart = {};
    $scope.show = {};

    if (ComputerService.getHardwareTypes().length == 0) {
        ComputerService.retrieveHardwareTypes().then(function (success) {
            $scope.parts = ComputerService.getHardwareTypes();
        });
    } else {
        $scope.parts = ComputerService.getHardwareTypes();
    }

    $scope.loadChartInfoByType = function (id, type) {
        //if chart information is not loaded - load it
        if (!$scope.chart[type]) {
            ChartService.retrieveChartInfoByType(id).then(function (success) {
                $scope.chart[type] = ChartService.getChartInfoByType(id);
            });
        }
    };

};

myApp.controller('HWChartCtrl', ['$scope', '$http', 'ComputerService', 'ChartService', HWChartCtrl]);