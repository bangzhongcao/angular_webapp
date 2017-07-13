'use strict'

angular.module('app').directive('appPositionList',[function(){
	return{
		restrict:'A',
		resplace:true,
		templateUrl:'view/template/positionList.html'
	}
}]);