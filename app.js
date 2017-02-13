(function(window, angular, undefined) { 'use strict';

angular.module('biliSH', ['ngRoute'])
//---配置常量
.constant('C', {
	//调试常量
})
//---初始化配置
.config(['$routeProvider', '$sceProvider', function($routeProvider, $sceProvider) {
	$sceProvider.enabled(false); //关闭SCE
	$routeProvider.when('/view-main', {
		templateUrl: '/view-main/view-main.html',
		controller: 'ViewMainCtrl'
	})
	.when('/view-editor/:cid', {
		templateUrl: '/view-editor/view-editor.html',
		controller: 'ViewEditorCtrl'
	});
	$routeProvider.otherwise({redirectTo: '/view-main'});
}]);
})(window, angular);