import html from "./view1.html"
import angular from "angular"

angular.module("myApp.view1", ["ngRoute"])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            template: html,
            controller: 'View1Ctrl'
        });
    }]).controller('View1Ctrl', ['$scope', function ($scope) {
    $scope.newTaskName = '';
    $scope.taskList = [{
        id: 0,
        name: 'task 01',
        completed: false,
    }, {
        id: 1,
        name: 'task 02',
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
    $scope.handleAddTask = () => {
        $scope.newTask = {
            id: $scope.taskList.length + $scope.finishedList.length,
            name: $scope.newTaskName,
            completed: false
        };
        $scope.taskList.push($scope.newTask);
        $scope.newTaskName = '';
    }
}]);
import "../../components/todo/Todo"
import "../../components/archive/Archive"
