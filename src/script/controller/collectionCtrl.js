'use strict'

angular.module('app').controller('collectionCtrl',['$scope','$rootScope',function($scope,$rootScope){
	$scope.list = $rootScope.collectList;
}]);