import html from "./Archive.html"
import angular from "angular"
import "./Archive.sass"

angular.module('myApp.view1').component('archive', {
    template: html,
    bindings: {
        finishedList: '<',
    },
    controller: function ArchiveController() {}
});
