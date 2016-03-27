/**
 * Created by D on 3.3.2016 ã..
 */

/**
 * Created by D on 14.2.2016 ã..
 */

var PCConfigCtrl = function ($scope, $http, gpIdentity) {
    var user = 'anonymous';
    if (gpIdentity.isAuthenticated()) {
        user = gpIdentity.currentUser.username;
    }

    $scope.formatDate = function (date) {
        return new Date(date).toGMTString();
    };

    $http.get(['pc/user/', user, '/configs'].join('')).then(function (response) {
        console.log(response.data);
        $scope.configs = response.data;
    });

    $scope.oneAtATime = true;
};

myApp.controller('PCConfigCtrl', ['$scope', '$http', 'gpIdentity', PCConfigCtrl]);