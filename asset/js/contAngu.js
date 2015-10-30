angular.module('cmsCom', [])
	.controller('MainCtrl',function($window, $scope){
        $scope.scrollPos = 0;

        $window.onscroll = function(){
           console.log('ok');
        };
    });