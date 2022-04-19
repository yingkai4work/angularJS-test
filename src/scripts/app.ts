import angular, {IController, IModule} from "angular";

// angular.module("module1", []).controller("test", [
//   "$scope",
//   function ($scope) {
//     $scope.name = "AngularJS111";
//   },
// ]);

/*angular.module("todoApp", []).controller("TodoListController",  function ($scope) {
    console.log($scope)
    console.log(this)

    // let todoList = $scope;
    let todoList = this;
    todoList.todos = [
        { text: "learn AngularJS", done: true },
        { text: "build an AngularJS app", done: false },
    ];

    todoList.addTodo = function () {
        todoList.todos.push({ text: todoList.todoText, done: false });
        todoList.todoText = "";
    };

    todoList.remaining = function () {
        let count = 0;
        angular.forEach(todoList.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    todoList.archive = function () {
        let oldTodos = todoList.todos;
        todoList.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) todoList.todos.push(todo);
        });
    };
});*/
angular.module("todoApp", []).controller("TodoListController", ["$scope", function ($scope) {
    console.log($scope)
    console.log(this)
    $scope.todos = [
        {text: "learn AngularJS", done: true},
        {text: "build an AngularJS app", done: false},
    ];

    $scope.addTodo = function () {
        console.log($scope);
        $scope.todos.push({text: $scope.todoText, done: false});
        $scope.todoText = "";
    };

    $scope.remaining = function () {
        let count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {
        let oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}]);

// console.log(angular);
