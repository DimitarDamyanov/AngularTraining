/**
 * Created by D on 31.1.2016 ã..
 */
var SavePCCtrl = function ($scope, computer, computerResource) {
    var getAllComputers = function () {
        computerResource.query(function (data) {
            $scope.pcs = data;
        });
    }
    getAllComputers();


};

myApp.controller('ComputerController', ['$scope', 'computer', 'computerResource', SavePCCtrl]);
