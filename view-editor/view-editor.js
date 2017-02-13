;(function(window, angular, undefined) { 'use strict';

angular.module('biliSH')
.controller('ViewEditorCtrl',['$scope', '$routeParams', '$location', '$http', function ($scope, $routeParams, $location, $http) {
	//---请求布局信息
	// $http.get()
	//---存储布局信息
	$scope.layout = '';
}]);
})(window, angular);