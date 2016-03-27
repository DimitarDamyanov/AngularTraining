/**
 * Created by D on 14.2.2016 ã..
 */

myApp.factory('ComputerService', function ($q, $http, gpIdentity) {
    var hardwareTypes = [],
        parts = {};

    var PersonalComputer = {
        props: {
            cpu: '',
            gpu: '',
            powerSupply: '',
            hdd: '',
            memory: '',
            moba: ''
        },
        reset: function () {
            this.props.processor = '',
                this.props.hdd = '',
                this.props.gpu = '',
                this.props.cpu = '',
                this.props.powerSupply = '',
                this.props.memory = '',
                this.props.moba = ''
        }
    };

    function getHardwareTypes () {
        return hardwareTypes;
    }

    function retrieveAllPartsByType(types){
        for (var i = 0; i < types.length; i++) {
            var url = ['/hardware/parts/', types[i].id].join('');
            var id = types[i].id;
            $http.get(url).then(function (response) {
                if (response && response.data) {
                    parts[response.data.type] = response.data.parts;
                }
            });
        }
    }


    function retrieveHardwareTypes () {
        var dfd = $q.defer();
        $http.get('/hardware/type').then(function (response) {
            if (response.data) {
                hardwareTypes = response.data;
                dfd.resolve(true);
            } else {
                dfd.resolve(false);
            }
        });
        return dfd.promise;
    }

    function saveComputer(parts) {
        var url = '/pc';
        var computer = {
            parts: parts
        };
        if (gpIdentity.isAuthenticated()) {
            computer.username = gpIdentity.currentUser.username;
        } else {
            computer.username = 'anonymous';
        }
        computer.name = '56d7569910146a3c0812a32c';
        $http.post(url, computer).then(function () {
            console.log('computer saved');
        });

    }

    return {
        PersonalComputer: PersonalComputer,
        retrieveHardwareTypes: retrieveHardwareTypes,
        getHardwareTypes: getHardwareTypes,
        savePC: saveComputer
    }

});
