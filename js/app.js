((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/')
        $stateProvider.state('app', {
            url: '/',
            template: '<h1>Hello world</h1>'
        })
    }])
})(angular.module('app', [
    'ui.router'
]))
