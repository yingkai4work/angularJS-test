import html from "./Todo.html"
import angular from "angular"

angular.module('myApp.view1').component('todo', {
    template: html,
    bindings: {
        taskList: '=',
        finishedList: '=',
    },
    controller: function TodoController() {
        this.handleArchiveClick = () => {
            this.newTaskList = [];
            this.taskList.map((task) => task.completed ? this.finishedList.push(task) : this.newTaskList.push(task));
            this.finishedList.sort((pre,cur)=> pre.id - cur.id);
            this.taskList = this.newTaskList;
        }
    }
});
