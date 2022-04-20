import html from "./view1.html"
import angular from "angular"
import "./view1.sass"

angular.module("myApp.view1", ["ngRoute"])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            template: html,
            controller: 'View1Ctrl'
        });
    }]).controller('View1Ctrl', ['$scope', function ($scope) {
    $scope.taskList = [{
        id: 0,
        name: 'task 01: today I wanna finish my homework before dinner',
        completed: false,
    }, {
        id: 1,
        name: "task 02: I have to buy a cake and diamond ring for my wife's birthday, if this thing is forgot, maybe I'll get divorced ...wait, maybe that's what I'm waiting for? so that I keep deffering it ,haha'",
        completed: false,
    }, {
        id: 2,
        name: 'task 03',
        completed: false,
    },
    ];
    $scope.finishedList = [{
        id: 3,
        name: 'task 04',
        completed: true,
    }, {
        id: 4,
        name: 'task 05',
        completed: true,
    },];
}]);
import "../../components/newTask/NewTask"
import "../../components/todo/Todo"
import "../../components/archive/Archive"
