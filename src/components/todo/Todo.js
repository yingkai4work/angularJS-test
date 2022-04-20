import html from "./Todo.html"
import angular from "angular"

angular.module('myApp.view1').component('todo', {
    template: html,
    bindings: {
        taskList: '=',
        finishedList: '=',
    },
    controller: function TodoController() {

    }});
