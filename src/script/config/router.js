'use strict';
// 在另一个文件中引用moudle
angular.module('app').config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$stateProvider.state('main',{
			url:'/main',
			templateUrl:'view/main.html',
			controller:'mainCtrl'
		});
		$urlRouterProvider.otherwise('main');
}])