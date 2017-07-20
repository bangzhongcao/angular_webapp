'use strict'

angular.module('app').controller('postLogCtrl',['$scope','$http',function($scope,$http){
	$scope.isActive = '';
	$scope.tablist= [{
		id:'all',
		name:'全部'
	},{
		id:'pass',
		name:'面试邀请'
	},{
		id:'fail',
		name:'不合适'
	}];
	$http.get('data/myPost.json').success(function(response){
		$scope.list = response;
	})
	$scope.filterobj = {};
	$scope.filters = function(id){
		$scope.isActive = id;
		switch(id){
			case 'all':
				delete $scope.filterobj.state;
				break;
			case 'pass':
				$scope.filterobj.state ='1';
				break;
			case 'fail':
				$scope.filterobj.state = '-1';
				break;
		}
	}
	$scope.filters('all');
}]);