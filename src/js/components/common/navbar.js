((app) => {
    'use strict'
    app.component("navbar", {
        templateUrl: 'js/components/common/navbar.html',
        bindings: {
            user: '<'
        },
        controller: [function() {
            angular.extend(this, {
                openNav() {
                    this.isOpen = true;
                },
                closeNav() {
                    this.isOpen = false;
                }
            })
        }]
    })

})(angular.module('app.common'))
