import html from "./Archive.html"
import angular from "angular"

angular.module('myApp.view1').component('archive', {
    template: html,
    bindings: {
        taskList: '=',
        finishedList: '=',
    },
    controller: function ArchiveController() {}
});
