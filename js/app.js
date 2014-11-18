'use strict';

var HRWorld = angular.module('HRWorld', []);
 
HRWorld.controller('MainCtrl', function ($scope) {

    $scope.preloadedHumanList = new Array;

    $scope.preloadedHRList = new Array;

    $scope.init = function(data) {
        for (var index = 0, l = data.humanList.length; index < l; index++) {
            $scope.preloadedHumanList[index] = new Human(data.humanList[index]);
        }

        for (var index = 0, l = data.hrList.length; index < l; index++) {
            $scope.preloadedHRList[index] = new HR(data.hrList[index]);
        }

        // @todo move it to tests
        $scope.preloadedHRList[0].addWorker($scope.preloadedHumanList[0]);
        $scope.preloadedHumanList[0].setSpouse($scope.preloadedHumanList[1]);
        $scope.preloadedHumanList[1].setPhone('+1 123456789');
        $scope.preloadedHumanList[0].setPhone('+1 987654321');

        $scope.preloadedHRList[1].addWorker($scope.preloadedHumanList[1]);
        $scope.preloadedHumanList[1].setPhone('+1 123456789');
    };
});