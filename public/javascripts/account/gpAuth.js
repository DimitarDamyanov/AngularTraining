/**
 * Created by D on 13.2.2016 ã..
 */
myApp.factory('gpAuth',function($http, gpIdentity, $q){
    return {
        authenticateUser : function(username, password){
            var dfd = $q.defer();
            $http.post('/login',{username: username, password: password}).then(function(response){
                if(response.data.success){
                    gpIdentity.currentUser = response.data.user;
                    dfd.resolve(true);
                } else {
                    dfd.resolve(false);
                }
            });
            return dfd.promise;
        },
        logoutUser: function(){
            gpIdentity.currentUser = undefined;
            var dfd = $q.defer();
            $http.post('/logout', {logout: true}).then(function(){
                gpIdentity.currentUser = undefined;
                dfd.resolve(true);
            });

            return dfd.promise;
        }
    }
});