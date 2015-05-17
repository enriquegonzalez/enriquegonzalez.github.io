(function(){
var app = angular.module('enrique', ['ngAnimate', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/work/work.html',
        // controller: 'WorkCtrl',
        // controllerAs: 'work'
      })
      .when('/work/gravitytank-feedback', {
        templateUrl: '/work/gravitytank-feedback.html',
      })
      .otherwise({
        controller: 'Error404Controller',
        templateUrl: '/404.html'
      });

    $locationProvider.html5Mode(true);
}])

app.controller('ContactCtrl', function($scope){
  $scope.email = 'egonzalez78@gmail.com'
})


app.controller('TabCtrl', function($scope){
  $scope.tab = 1;  //default to show first tab

  $scope.setTab = function(tab){
    $scope.tab = tab;
  };

  $scope.isSet = function(checkTab){
    return $scope.tab === checkTab;
  };

});
})();

