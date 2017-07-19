'use strict'

angular.module('app').controller('searchCtrl',['$scope','$http',
	function($scope,$http){
		$scope.searchInfo = '';
		$scope.isActive = '';
		$scope.tablist=[{
			id:'city',
			name:'城市'
		},{
			id:'salary',
			name:'薪水'
		},{
			id:'scale',
			name:'公司规模'
		}];
		$scope.search = function(){
			$http.get('data/positionList.json?name='+$scope.searchInfo).success(function(response){
				$scope.list = response;
			});
		}
		$scope.search();

		$scope.filters = function(id){
			$scope.isActive = id;
			$http.get('data/'+id+'.json').success(function(response){
				$scope.sheetlist = response;
				$scope.visible = true;
			});
		}
		$scope.cancel = function(){
			$scope.visible = false;
		}

		$scope.filterobj = {};
		$scope.selectCondition = function(obj){
			$scope.visible = false;
			if(obj.id){
				angular.forEach($scope.tablist,function(item){
					if($scope.isActive==item.id){
						item.name = obj.name;
					}
				});
				$scope.filterobj[$scope.isActive+'Id'] = obj.id;
			}else{
				delete $scope.filterobj[$scope.isActive+'Id'];
				angular.forEach($scope.tablist,function(item){
					if($scope.isActive==item.id){
						switch(item.id){
							case 'city':
								item.name = '全国';
								break;
							case 'salary':
								item.name = '薪水';
								break;
							case 'scale':
								item.name = '公司规模';
								break;
						}
					}
				});
			}
		}
	}
]);