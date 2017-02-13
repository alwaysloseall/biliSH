;(function(window, angular, undefined) { 'use strict';

angular.module('biliSH')
.controller('ViewMainCtrl',['$scope', '$location', function ($scope, $location) {
	$scope.chooseCom = function (cid) {
		$location.path('/view-editor/' + cid);
	};
}]);
})(window, angular);