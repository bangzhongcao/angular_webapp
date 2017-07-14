'use strict';
// 在另一个文件中引用moudle
angular.module('app').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$stateProvider.state('main',{
			url:'/main',
			templateUrl:'view/main.html',
			controller:'mainCtrl'
		}).state('position',{
			url:'/position/:id',
			templateUrl:'view/position.html',
			controller:'positionCtrl'
		});
		$urlRouterProvider.otherwise('main');
}])