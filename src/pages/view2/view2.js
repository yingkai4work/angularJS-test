import html from "./view2.html"
import angular from "angular";

angular.module("myApp.view2", ["ngRoute"])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
            template: html,
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', [function() {
        console.log("view2");
    }]);
