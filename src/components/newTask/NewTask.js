import html from "./NewTask.html"
import angular from "angular"
import "./NewTask.sass"

angular.module('myApp.view1').component('newTask', {
    template: html,
    bindings: {
        taskList: '=',
        finishedList: '@',
    },
    controller: function NewTaskController() {
        this.handleAddTask = () => {
            if (!this.newTaskName) {
                this.showError = true;
                return;
            }
            this.newTask = {
                id: this.taskList.length + this.finishedList.length,
                name: this.newTaskName,
                completed: false
            };
            this.taskList.push(this.newTask);
            this.newTaskName = '';
            this.showError = false;
        }
    }
});
