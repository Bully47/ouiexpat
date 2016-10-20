((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.navbar', {
            url: '/',
            template: '<home />'
        })
    }])
})(angular.module('app.common', []))
