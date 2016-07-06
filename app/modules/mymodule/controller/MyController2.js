define(['module-app'], function (moduleApp) {
    'use strict';
    moduleApp.controller('myController2', [
        '$scope',
        'myService',
        function ($scope, myService) {
            $scope.me = myService.findMe();
            $scope.other = myService.findOther({id: 42});
        }
    ]);
});
