/**
 * Created by D on 7.3.2016 ã..
 */
var PCEditCtrl = function ($scope, $http, gpIdentity, EditPcService) {

    $scope.change = function () {
        EditPcService.setConfig({
            _id: $scope.select
        });
        console.log($scope.select);
    };

    $http.get('/pc/user/admin/all-configs').then(function (response) {
        $scope.pcConfigs = response.data;
        console.log($scope.pcConfigs);
    });
};

myApp.controller('PCEditCtrl', ['$scope', '$http', 'gpIdentity', 'EditPcService', PCEditCtrl]);