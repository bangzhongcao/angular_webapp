'use strict'

angular.module('app').directive('appPositionClass',[function(){
	return {
		restrict:'A',
		replace:true,
		templateUrl:'view/template/positionClass.html',
		scope:{
			com:'='
		},
		link:function($scope){
			$scope.showPositionList=function(index){
				$scope.positionList = $scope.com.positionClass[index].positionList;
				$scope.isActive = index;
			}
			// 监控com对象是否传入
			$scope.$watch('com',function(newVal){
				if(newVal){
					$scope.showPositionList(0);
				}
			})
		}
	}
}])