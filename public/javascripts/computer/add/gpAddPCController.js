/**
 * Created by D on 14.2.2016 ã..
 */

var AddPCController = function ($scope, $http, ComputerService) {
    $scope.pc = ComputerService.PersonalComputer;
    $scope.parts = {};

    $scope.loadPartsByType = function(types){
        for (var i = 0; i < types.length; i++) {
            var url = ['/hardware/parts/', types[i].id].join('');
            var id = types[i].id;
            $http.get(url).then(function (response) {
                if (response && response.data) {
                    $scope.parts[response.data.type] = response.data.parts;
                }
            });
        }
    };

    ComputerService.retrieveHardwareTypes().then(function (success) {
        $scope.hardwareTypes = ComputerService.getHardwareTypes();
        $scope.loadPartsByType($scope.hardwareTypes);
    });

    $scope.savePC = function (pc) {
        var parts = [];
        angular.forEach(pc.props, function (value, key) {
            parts.push(value);
        });
        ComputerService.savePC(parts);
    };

    $scope.componentPreview = {
        img: {
            //set default value
            url: "http://thumbs.dreamstime.com/z/stylish-simple-computer-parts-icons-green-gray-colors-35098832.jpg",
            setUrl: function (url) {
                this.url = url;
            }
        }
    };

    $scope.showImg = function (src) {
        $scope.img.src = src;
    };
    $scope.reset = function () {
        console.log($scope.pc);
        $scope.pc.reset();
        $scope.componentPreview.img.url = "http://thumbs.dreamstime.com/z/stylish-simple-computer-parts-icons-green-gray-colors-35098832.jpg";
    }


};

myApp.controller('AddPCController', ['$scope', '$http', 'ComputerService', AddPCController]);