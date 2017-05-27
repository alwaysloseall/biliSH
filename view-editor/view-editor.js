;(function(window, angular, undefined) { 'use strict';

angular.module('biliSH')
.controller('ViewEditorCtrl',['$scope', '$compile', '$routeParams', '$location', '$http', function ($scope, $compile, $routeParams, $location, $http) {
	//---请求布局信息
	// $http.get()
	//---存储布局信息
	$scope.layout = '';
	$scope.createWidget = function (type) {
		 $('#editor-main').append('<biw-' + type + '></biw-' + type + '>');
		 $compile($('#editor-main').contents())($scope);
	}
}]);
})(window, angular);