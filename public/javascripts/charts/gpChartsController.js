/**
 * Created by D on 4.3.2016 ã..
 */
var HWChartCtrl = function ($scope, $http, ComputerService) {

    if (ComputerService.getHardwareTypes().length == 0) {
        ComputerService.retrieveHardwareTypes().then(function (success) {
            $scope.parts = ComputerService.getHardwareTypes();
        });
    } else {
        $scope.parts = ComputerService.getHardwareTypes();
    }

    $scope.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.data = [300, 500, 100];
};

myApp.controller('HWChartCtrl', ['$scope', '$http', 'ComputerService', HWChartCtrl]);