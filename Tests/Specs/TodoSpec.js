describe("todo", function () {
    describe("add Todo", function() {
        it("should not add empty todo it the array", function() {
            var $scope = {};
            $scope.todos = [];
            $scope.formTodoText = '';
            TodoController($scope);
            $scope.addTodo();
            expect($scope.todos.length).toBe(2);
        });
    });
});