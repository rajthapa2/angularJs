function TodoController($scope)
{
	$scope.totalToDos = 4;
	$scope.todos = [{text: 'Learn AngularJs', done: false},
					{text: 'Create an App', done: true}];

}