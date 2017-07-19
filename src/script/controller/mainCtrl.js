'use strict';
angular.module('app').controller('mainCtrl',['$scope','$http','$q',
	function($scope,$http,$q){
		$scope.isLogin = false;
		$http.get('data/positionList.json').success(function(response){
			$scope.list = response;
		});
}]);