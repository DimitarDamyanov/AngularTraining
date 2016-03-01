 /**
 * Created by D on 7.2.2016 ã..
 */
 (function(){
     "use strict";
     angular.module("common.services").factory("computerResource",["$resource","appSettings", computerResource]);

     function computerResource($resource, appSettings){
        return $resource(appSettings.serverPath + "pc");
     }
 }());