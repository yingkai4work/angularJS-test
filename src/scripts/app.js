import angular from "angular";
import "angular-route"
import html1 from "../pages/view1/view1.html";
import html2 from "../pages/view2/view2.html";
import html from "../components/todo/Todo.html";
// import "../styles/todo.css"
// export const VIEW1 = angular.module("myApp.view1", ["ngRoute"]);

import "../pages/view1/view1"
import "../pages/view2/view2"

// Declare app level module which depends on views, and core components



/*angular.module("myApp.view1", ["ngRoute"])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            template: html1,
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', ['$scope', function ($scope) {
        console.log("111111")
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
        }, {
            id: 3,
            name: 'task 04',
            completed: true,
        }, {
            id: 4,
            name: 'task 05',
            completed: true,
        },
        ];
    }])
    .component('todo', {
        template: html,
        bindings: {
            taskList: '=',
        },
        controller: function TodoController($scope) {
            this.test = [{
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
            }, {
                id: 3,
                name: 'task 04',
                completed: true,
            }, {
                id: 4,
                name: 'task 05',
                completed: true,
            },
            ];
            // this.testNum = 1;
            // this.completed = completed.filter($scope.taskList, true);
            console.log(this);
            console.log(this.test);
            console.log(this.taskList);
            console.log($scope);
            console.log($scope.$ctrl.taskList);
        }
    });*/

/*angular.module("myApp.view2", ["ngRoute"])
    .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
        template: html2,
        controller: 'View2Ctrl'
    });
}])
    .controller('View2Ctrl', [function () {
        console.log("view2");
    }]);*/


angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    // 'myApp.version'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);

// export default angular








