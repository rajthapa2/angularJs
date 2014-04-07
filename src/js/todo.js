	function TodoController($scope)
	{
		$scope.todos = [{text: 'Learn AngularJs', done: false},
		{text: 'Create an App', done: true}];
		
		$scope.getTotalTodos = function(){
			return $scope.todos.length;
		};


		$scope.addTodo = function(){
			$scope.todos.push({text:$scope.formTodoText, done: false});
			$scope.formTodoText = '';
		}
		$scope.removeTodo = function(todo){
			var index = $scope.todos.indexOf(todo);
			$scope.todos.splice(index, 1);
		}
	}