'use strict'

angular.module('app').controller('companyinfoCtrl',['$scope','$http','$state',
	function($scope,$http,$state){
		$http.get('data/company.json?id='+$state.params.id)
		.success(function(response){
			$scope.company = response;
		});
}])