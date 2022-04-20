import angular from "angular";
import "angular-route"
import "../pages/view1/view1"
import "../pages/view2/view2"

angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);








