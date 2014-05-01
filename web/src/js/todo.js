var myApp = angular.module('todoApp', []);

myApp.controller('todoApp', ['$scope', function ($scope) {
    $scope.todos = [{ text: 'Learn AngularJs', done: false },
    { text: 'Create an App', done: true }];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.displayErrorMessage = false;

    $scope.formTodoText = "";

    $scope.addTodo = function () {
        if ($scope.formTodoText === '') {
            $scope.displayErrorMessage = true;
            return false;
        }
        $scope.displayErrorMessage = false;
        $scope.todos.push({ text: $scope.formTodoText, done: false });
        $scope.formTodoText = '';
    };

    $scope.removeTodo = function (todo) {
        var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
    };

    $scope.clearDoneTodos = function () {
        for (var i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos[i].done === true) {
                $scope.todos.splice(i, 1);
                i--;
            }
        }
    };
}]);