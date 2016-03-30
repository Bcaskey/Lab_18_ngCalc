var controllers = angular.module('myApp.controllers', []);

controllers.controller('welcomeController', ['$scope', function($scope) {
    
    $scope.num1;
    $scope.num2;
    $scope.add = function(){
        if ($scope.num1 == null || $scope.num2 == null) {
            alert('Both Operands must be used');
        } else {
            var opt1 = parseInt($scope.num1, 10);
            var opt2 = parseInt($scope.num2, 10);
            var total = (opt1 + opt2);
            $scope.task = 'adding';
            $scope.opt1 = opt1;
            $scope.opt2 = opt2;
            $scope.total = total;
            $scope.showMeResult=true;            
        }
        $scope.num1 = null;
        $scope.num2 = null;
    };
    $scope.subtract = function(){
        if ($scope.num1 == null || $scope.num2 == null) {
            alert('Both Operands must be used');
        } else {
            var opt1 = parseInt($scope.num1, 10);
            var opt2 = parseInt($scope.num2, 10);
            var total = (opt1 - opt2);
            $scope.task = 'subtracting';
            $scope.opt1 = opt1;
            $scope.opt2 = opt2;
            $scope.total = total;
            $scope.showMeResult=true;            
        }
        $scope.num1 = null;
        $scope.num2 = null;
    };
    $scope.multiply = function(){
        if ($scope.num1 == null || $scope.num2 == null) {
            alert('Both Operands must be used');
        } else {
            var opt1 = parseInt($scope.num1, 10);
            var opt2 = parseInt($scope.num2, 10);
            var total = (opt1 * opt2);            
            $scope.task = 'multiplying';
            $scope.opt1 = opt1;
            $scope.opt2 = opt2;
            $scope.total = total;
            $scope.showMeResult=true;            
        }
        $scope.num1 = null;
        $scope.num2 = null;
    };
    $scope.divide = function(){
        if ($scope.num1 == null || $scope.num2 == null) {
            alert('Both Operands must be used');
        } else if ($scope.num2 == 0) {
            alert('You cannot divide by 0. Do not try this or else!');
        }
        
        else {
            var opt1 = parseInt($scope.num1, 10);
            var opt2 = parseInt($scope.num2, 10);
            var total = (opt1 / opt2);
            $scope.task = 'dividing';
            $scope.opt1 = opt1;
            $scope.opt2 = opt2;
            $scope.total = total;
            $scope.showMeResult=true;            
        }
        $scope.num1 = null;
        $scope.num2 = null;
    };
    
}]);



