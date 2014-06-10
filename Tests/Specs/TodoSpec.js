describe("todo", function () {
    var scope, controller;

    beforeEach(function () {
        module('myApp');
    });

    describe('todoApp', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('todoApp', {
                '$scope': scope
            });
        }));

        it("should have a empty formText", function () {
            expect(scope.formTodoText).toBe("");
        });

        it("should return a number of todos in array", function(){
            var todoTask1 = {text:"learn how to do jasmine",done:"false"};
            var todoTask2 = {text:"learn how to use webstrom",done:"false"};
            scope.todos.push(todoTask1);
            scope.todos.push(todoTask2);
            var result = scope.getTotalTodos();
            expect(result).toBe(4);
        });

        it("should remove the selected todo form the array", function(){
            scope.todos.splice(0,scope.todos.length);
            var todo = {text: "learn angularJs", done:false};
            scope.todos.push(todo);

            scope.removeTodo(todo);

            expect(scope.todos.length).toBe(0);
        });

        it("should add a todo in the todosArray", function(){
            scope.todos.splice(0, scope.todos.length);

            scope.formTodoText = "Learn webstrom";
            scope.addTodo();
            expect(scope.todos.length).toBe(1);
            expect(scope.displayErrorMessage).toBeFalsy();

        });

        it("should not add a todo if the formTodoText is empty", function(){
           scope.todos.splice(0, scope.todos.length);

           scope.formTodoText = "";
           scope.addTodo();
           expect(scope.todos.length).toBe(0);
            expect(scope.displayErrorMessage).toBeTruthy();
        });

        it("should clear the done task from the todosArray", function(){
            scope.todos.splice(0, scope.todos.length);

            var todo1 = {task:"learning karma", done: true};
            var todo2 = {task:"learning webstrom", done: false};
            var todo3 = {task:"learn sonar", done: true};

            scope.todos.push(todo1);
            scope.todos.push(todo2);
            scope.todos.push(todo3);

            scope.clearDoneTodos();
            expect(scope.todos.length).toBe(1);
            expect(scope.todos[0].task).toBe("learning webstrom")
        });

    });

});


//            http://blog.freeside.co/post/41774841006/getting-started-with-angular-unit-tests
//            http://projectpoppycock.com/unit-testing-with-angularjs-grunt-karma-and-travisci/
//            http://gruntjs.com/getting-started
//http://jsfiddle.net/fdietz/2Ny8x/

