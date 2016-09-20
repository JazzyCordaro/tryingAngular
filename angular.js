console.log('angular.js is sourced yo');

var myApp = angular.module('myApp', []);

var allFruits=[];
myApp.controller('jazzy', ['$scope', function($scope){
  console.log('ng');
}]);
