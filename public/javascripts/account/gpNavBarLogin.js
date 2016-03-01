/**
 * Created by D on 11.2.2016 ã..
 */

var NavLoginController = function ($scope, $http, toastr, gpIdentity, gpAuth, $location) {
    $scope.identity = gpIdentity;
    $scope.signin = function (username, password) {
        gpAuth.authenticateUser(username, password).then(function (success) {
            if (success) {
                toastr.success('You have been successfully logged in! ');
            } else {
                toastr.error('Invalid combination of username/password!');
            }
        });
    }
    $scope.signout = function () {
        gpAuth.logoutUser().then(function(){
            $scope.username = '';
            $scope.password = '';
            $location.path('/');
        });
    }
};

myApp.controller('NavLoginController', ['$scope', '$http', 'toastr', 'gpIdentity', 'gpAuth','$location', NavLoginController]);



