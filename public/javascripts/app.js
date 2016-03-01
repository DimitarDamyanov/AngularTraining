/**
 * Created by D on 31.1.2016 ã..
 */
var myApp = angular.module('myApp',['common.services','ui.bootstrap','toastr']);

//myApp.config(function($routeProvider, $locationProvider){
//    $locationProvider.html5Mode(true);
//    $routeProvider.when('/partials/main-nav')
//});


myApp.controller('MainCtrl', ['$scope','$http', function($scope, $http) {
    $scope.message = 'Hola!';
    $http.get('/user').then(function(reseponse){
        $scope.user = reseponse.data;
    });

}]);