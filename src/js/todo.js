	function TodoController($scope)
	{
		$scope.totalToDos = 4;
		$scope.todos = [{text: 'Learn AngularJs', done: false},
		{text: 'Create an App', done: true}];

		$scope.addTodo = function(){
			$scope.todos.push({text:$scope.formTodoText, done: false});
			$scope.formTodoText = '';
		}
	}