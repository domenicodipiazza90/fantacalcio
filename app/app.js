define([
    'angular',
    'angular-ui-router',
    'angular-bootstrap',
    'angular-resource',
    'angular-table'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'ui.bootstrap',
        'ngResource',
        'angular-table',

        //modules
        'app.mymodule'
    ]);
});
