var controllers = angular.module('myApp.controllers', []);

controllers.controller('welcomeController', ['$scope', function($scope) {
    var opt1 = $scope.num1;
    var opt2 = $scope.num2;
    $scope.opt1 = parseInt(opt1, 10);
    $scope.opt2 = parseInt(opt2, 10);
    // var opt1 = num1;
    
    // var opt2 = num2;
    // $scope.num_str = parseInt(num_str, 10);
    
    $scope.add = function(opt1, opt2){
        console.log(opt1 + opt2 + 'add');
    //return op1 + op2;
    };
    $scope.subtract = function(opt1, opt2){
        console.log(opt1 + opt2 + 'subtract');
    //return op1 - op2;
    };
    $scope.multiply = function(opt1, opt2){
        console.log(opt1 + opt2 + 'multiply');
    //return op1 * op2;
    };
    $scope.divide = function(opt1, opt2){
        console.log(opt1 + opt2 + 'divide');
    //return op1 / op2;
    };
}]);


function calculate(operation) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    num1 = parseInt(num1, 10);
    num2 = parseInt(num2, 10);
    var result = 0;
    switch (operation) {
        case 'add':
            davidsLib.add(num1, num2, function(err, result) {
                if (err) {
                    alert(err + 'This is running');
                } else {
                    alert('Yea, the answer is: ' + result)
                }
            });
            break;
        case 'subtract':
            davidsLib.subtract(num1, num2, function(err, result) {
                if (err) {
                    alert(err + 'This is running');
                } else {
                    alert('Yea, the answer is: ' + result)
                }
            });
            break;
        case 'multiply':
            davidsLib.multiply(num1, num2, function(err, result) {
                if (err) {
                    alert(err + 'This is running');
                } else {
                    alert('Yea, the answer is: ' + result)
                }
            });
            break;
        case 'divide':
            davidsLib.divide(num1, num2, function(err, result) {
                if (err) {
                    alert(err + 'This is running');
                } else {
                    alert('Yea, the answer is: ' + result)
                }
            });
            break;
    }
}
