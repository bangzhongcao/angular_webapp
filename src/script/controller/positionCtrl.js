'use strict'

angular.module('app').controller('positionCtrl',['$scope','$http','$q','$state','cache','$rootScope',
	function($scope,$http,$q,$state,cache,$rootScope){
		$rootScope.collectList = [];
		if(cache.get('name')){
			$scope.isLogin = true;
		}else{
			$scope.isLogin = false;
		}

		$scope.isActive = false;
		$scope.ActiveImg = 'image/star-active.png';
		$scope.UnactiveImg = 'image/star.png';

		var def = $q.defer();
		function getPositioninfo(){
			$http.get('data/position.json?id='+$state.params.id).success(function(response){
				$scope.position = response;
				$scope.isActive = response.active;
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

		// 收藏或取消收藏
		$scope.collect = function(position){
			if($scope.isActive){
				$scope.isActive = false;
				position.active = false;
				$rootScope.collectList.splice($rootScope.collectList.indexOf(position),1);
			}else{
				$scope.isActive = true;
				position.active = true;
				$rootScope.collectList.push(position);
			}
		}
}]);