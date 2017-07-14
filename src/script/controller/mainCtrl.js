'use strict';
angular.module('app').controller('mainCtrl',['$scope',function($scope){
	$scope.list = [{
		id:'1234',
		imgSrc:'image/company-1.png',
		name:'运营',
		companyName:'慕课网',
		city:'北京',
		industry:'互联网',
		time:'2017-7-12 11:16'
	},
	{
		id:'1235',
		imgSrc:'image/company-2.png',
		name:'前段工程师',
		companyName:'六一',
		city:'北京',
		industry:'互联网',
		time:'2017-7-12 11:30'
	}];
}]);