'use strict';
angular.module('app').controller('mainCtrl',['$scope','$http','$q',
	function($scope,$http,$q){
	$http.get('data/positionList.json').success(function(response){
		$scope.list = response;
	});
}]);