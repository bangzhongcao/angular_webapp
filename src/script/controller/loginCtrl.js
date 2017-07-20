'use strict'

angular.module('app').controller('loginCtrl',['$scope','$state','cache','$http',function($scope,$state,cache,$http){
	$scope.submit = function(){
		$http.post('data/login.json',$scope.user).success(function(response){
			cache.put('id',response.id);
			cache.put('name',response.name);
			cache.put('image',response.image);
			$state.go('main');
		});
	}
}]);