/**
 * Created by D on 31.1.2016 ã..
 */

var myApp = angular.module('myApp', ['common.services', 'ui.bootstrap', 'toastr', 'ngRoute', 'ngAnimate', 'chart.js', 'underscore']);

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
        $routeProvider
            .when('/chart', {
                templateUrl: '/partials/charts/hw-chart',
                controller: 'HWChartCtrl'
            }).otherwise({
                redirectTo: '/chart'
            });
    });

    myApp.config(function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
            responsive: true
        });
        // Configure all doughnut charts
        ChartJsProvider.setOptions('Doughnut', {
            animateScale: true
        });
    });


}());


