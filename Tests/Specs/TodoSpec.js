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

    });
});


//            http://blog.freeside.co/post/41774841006/getting-started-with-angular-unit-tests
//            http://projectpoppycock.com/unit-testing-with-angularjs-grunt-karma-and-travisci/
//            http://gruntjs.com/getting-started
//http://jsfiddle.net/fdietz/2Ny8x/

