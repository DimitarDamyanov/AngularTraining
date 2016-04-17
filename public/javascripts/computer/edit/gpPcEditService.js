/**
 * Created by D on 10.4.2016 ã..
 */
myApp.factory('EditPcService', function ($http) {
    var config = {};

    function setConfig(config) {
        this.config = config;
    }

    function getConfig() {
        return this.config;
    }

    return {
        setConfig: setConfig,
        getConfig: getConfig
    }
});