describe("todo", function () {
    beforeEach(angular.mock.module('myApp'));
    beforeEach(angular.mock.inject(function ($rootScope, $controller) {
        this.scope = $rootScope.$new();
        $controller('todoApp', {
            $scope: this.scope
    });
    }));
    describe("add Todo", function () {
        it("should not add empty todo it the array", function () {
            var $scope = {};
            $scope.todos = [];
            $scope.formTodoText = '';
            TodoController($scope);
            $scope.addTodo();
            expect($scope.todos.length).toBe(2);
        });
    });
});


//var myApp = angular.module('todoApp', []);
//
//myApp.controller('todoApp', ['$scope', function ($scope) 

//            http://blog.freeside.co/post/41774841006/getting-started-with-angular-unit-tests
//            http://projectpoppycock.com/unit-testing-with-angularjs-grunt-karma-and-travisci/
//            http://gruntjs.com/getting-started