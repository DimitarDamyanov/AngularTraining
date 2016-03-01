/**
 * Created by D on 13.2.2016 ã..
 */
myApp.factory('gpIdentity',function($window){
    var currentUser = undefined;
    if(!!$window.bootstrappedUserObject){
        currentUser = $window.bootstrappedUserObject;
}
return  {
    currentUser : currentUser,
    isAuthenticated : function(){
        return !!this.currentUser;
    }
}
});