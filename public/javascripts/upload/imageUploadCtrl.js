/**
 * Created by D on 15.3.2016 ã..
 */

var ImageUploadCtrl = function ($scope, FileUploader) {
    var uploader = $scope.uploader = new FileUploader({
        url: 'upload/configuration/image'
    });

    uploader.filters.push({
        name: 'imageFilter',
        fn: function (item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });

};


myApp.controller('ImageUploadCtrl', ['$scope', 'FileUploader'], ImageUploadCtrl);