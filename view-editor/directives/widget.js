;(function(window, angular, undefined) { 'use strict';

angular.module('biliSH')
//---文字
.directive('biwText', ['$compile', 'Wevent', function ($compile, Wevent) {
	return {
		scope: {
			'bindVar': '=', //【必须】绑定的变量
		},
		restrict: 'E',
		template: '<div class="biw biw-text"></div>',
		replace: true,
		link: function (scope, ele) {
			Wevent.initEvent(ele);
			//---编译模板
			var html = '<div>test</div>';
			ele.append($(html));
		}
	}
}]);
})(window, angular);
