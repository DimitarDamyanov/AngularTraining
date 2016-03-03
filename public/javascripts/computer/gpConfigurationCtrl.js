/**
 * Created by D on 3.3.2016 ã..
 */

/**
 * Created by D on 14.2.2016 ã..
 */

var PCConfigCtrl = function ($scope, $http) {
    $http.get('pc/56d748eca671f580158daed1').then(function (response) {
        $scope.pc = response.data;
    });

    $scope.oneAtATime = true;
};

myApp.controller('PCConfigCtrl', ['$scope', '$http', PCConfigCtrl]);