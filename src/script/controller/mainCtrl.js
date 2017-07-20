'use strict';
angular.module('app').controller('mainCtrl',['$scope','$http','$q','cache',
	function($scope,$http,$q,cache){
		if(cache.get('id')){
			$scope.isLogin = true;
		}else{
			$scope.isLogin = false;
		}
		$http.get('data/positionList.json').success(function(response){
			$scope.list = response;
		});
}]);