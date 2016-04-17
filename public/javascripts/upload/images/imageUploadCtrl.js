/**
 * Created by D on 15.3.2016 ã..
 */

var ImageUploadCtrl = function ($scope, FileUploader, EditPcService) {
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

    $scope.uploader.onBeforeUploadItem = onBeforeUploadItem;

    function onBeforeUploadItem(item) {
        var pcId = EditPcService.getConfig()._id;
        item.formData.push({pcId: pcId});
    }

    uploader.customUploadALl = function () {
        uploader.uploadAll();
    }

};


myApp.controller('ImageUploadCtrl', ['$scope', 'FileUploader', 'EditPcService', ImageUploadCtrl]);