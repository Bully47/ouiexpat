((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider) => {
        $stateProvider.state('app.user', {
            url: '/user',
            template: '<user />'
        })
    }])
})(angular.module('app.user', ['ui.router']))
