'use strict'

angular.module('app').controller('positionCtrl',['$scope','$http','$q','$state',
	function($scope,$http,$q,$state){
		$scope.isLogin = false;
		var def = $q.defer();
		function getPositioninfo(){
			$http.get('data/position.json?id='+$state.params.id).success(function(response){
				$scope.position = response;
				def.resolve(response);
			}).error(function(response){
				def.reject(response);
			});
			return def.promise;
		}
		function getCompany(id){
			$http.get('data/company.json?id='+id).success(function(response){
				$scope.company = response;
			});
		}
		getPositioninfo().then(function(obj){
			getCompany(obj.id);
		},function(obj){});
}]);