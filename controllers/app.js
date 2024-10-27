// app.js
var app = angular.module('bankingApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/account', {
            templateUrl: 'views/account.html',
            controller: 'accountController',
            controllerAs: 'vm'
        })
        .when('/transaction', {
            templateUrl: 'views/transaction.html',
            controller: 'transactionController',
            controllerAs: 'vm'
        })
        .when('/card', {
            templateUrl: 'views/card.html',
            controller: 'cardController',
            controllerAs: 'vm'
        })
        .when('/atm', {
            templateUrl: 'views/atm.html',
            controller: 'atmController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Define the capitalize filter
app.filter('capitalize', function() {
    return function(input) {
        if (input) {
            return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
        }
        return input;
    };
});
