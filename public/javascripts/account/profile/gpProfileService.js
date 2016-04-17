/**
 * Created by D on 17.4.2016 ã..
 */

myApp.factory('gpProfileService', function ($http, gpIdentity, $q) {
    var avatar = null;
    return {
        loadAvatar: function (id) {
            var rootUrl = '/avatar/';
            var dfd = $q.defer();
            $http.get([rootUrl, id].join('')).then(function (response) {
                console.log(response);
                avatar = response.data;
                dfd.resolve(true);
            });
            return dfd.promise;
        },
        getAvatar: function () {
            return avatar;
        }
    }
});
