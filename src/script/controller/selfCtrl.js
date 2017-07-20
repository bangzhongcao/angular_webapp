'use strict'

angular.module('app').controller('selfCtrl',['$scope','cache','$state',function($scope,cache,$state){
	$scope.selfName = cache.get('name');
	$scope.selfImage = cache.get('image');
	$scope.logout = function(){
		cache.remove('id');
		cache.remove('name');
		cache.remove('image');
		$state.go('main');
	}
	$scope.login = function(){
		$state.go('login');
	}
}]);