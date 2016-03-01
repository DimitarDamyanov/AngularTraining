/**
 * Created by D on 7.2.2016 ã..
 */
(function(){
    var computerService = function($http, $log){

        var getAllComputers = function(){
            //productResource.query(function(data){
            //    $log.info("Data: " + data);
            //    return data.$promise;
            //});
            return $http.get('/pc').then(function(response){
                $log.info(response.data);
                return response.data;
            });
        };

        var getComputer = function(id){
            return $http.get('/pc/' + id).then(function(response){
                return response.data;
            });
        };

        var saveComputer = function(computer){
            $http.post('/pc', computer).then(function(reseponse){
                return reseponse.data;
            });
        };

        return {
            getAllComputers : getAllComputers,
            getComputer : getComputer,
            saveComputer : saveComputer
        }
    };

    var module = angular.module('myApp');
    module.factory('computer',computerService);
})();