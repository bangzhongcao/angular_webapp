'use strict'

angular.module('app').controller('registerCtrl',['$scope','$http','$interval','$state',function($scope,$http,$interval,$state){
	$scope.submit = function(){
		$http.post('data/regist.json',$scope.user).success(function(resp){
	      $state.go('login');
	    });
	}
	$scope.send = function(){
		$http.get('data/code.json').success(function(response){
			$scope.code_info = response;
			var count = 60;
			if(response.state==1){
				console.log(response.message);
				$scope.time='60s';
				var interval = $interval(function(){
					if(count<=0){
						$interval.cancel(interval);
						$scope.time = '';
					}else{
						count--;
						$scope.time = count+'s';
					}
				},1000);
			}
		});
	}
}]);