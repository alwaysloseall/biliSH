;(function(window, angular, undefined) { 'use strict';

angular.module('biliSH')
//---文字
.directive('biwText', ['$compile', function ($compile) {
	return {
		scope: {
			'bindVar': '=', //【必须】绑定的变量
		},
		restrict: 'E',
		template: '<div class="biw-text"></div>',
		replace: true,
		link: function (scope, ele) {
			//---编译模板
			var html = '<div>sss</div>';
			ele.append($(html));
		}
	}
}]);
})(window, angular);