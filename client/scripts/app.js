var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/login', {
            templateUrl: '/views/templates/login.html',
            controller: 'LoginController',
        })
        .when('/landlord', {
            templateUrl: '/views/templates/landlord.html',
            controller: 'LandlordController'
        })
        .when('/tenant', {
            templateUrl: '/views/templates/tenant.html',
            controller: 'TenantController'
        })
        .when('/property', {
            templateUrl: '/views/templates/property.html',
            controller: 'PropertyController'
        })
        .otherwise('login');

}]);
