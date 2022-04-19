import html from "./Todo.html"
import angular from "angular"

angular.module('myApp.view1').component('todo', {
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
})
