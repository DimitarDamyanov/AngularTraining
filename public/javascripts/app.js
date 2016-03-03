/**
 * Created by D on 31.1.2016 ã..
 */

var myApp = angular.module('myApp', ['common.services', 'ui.bootstrap', 'toastr', 'ngRoute', 'ngAnimate']);

(function () {
    myApp.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/add', {
                templateUrl: '/partials/computer/add-computer-form',
                controller: 'AddPCController'
            });
        $routeProvider
            .when('/my-configurations', {
                templateUrl: '/partials/computer/pc-config',
                controller: 'PCConfigCtrl'
            });
    });
}());


