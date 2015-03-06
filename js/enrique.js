(function(){
var app = angular.module('enrique', ['ngAnimate']);

app.controller('TabController', function($scope){
  $scope.tab = 1;  //default to show first tab

  $scope.setTab = function(tab){
    $scope.tab = tab;
  };

  $scope.isSet = function(checkTab){
    return $scope.tab === checkTab;
  };

});
})();
