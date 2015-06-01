(function(){
var app = angular.module('enrique', ['ngAnimate', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/work/work.html'
        // controller: 'WorkCtrl',
        // controllerAs: 'work'
      })
      .when('/work/gravitytank-feedback', {
        templateUrl: 'templates/work/gravitytank-feedback.html'
      })
      .when('/work/digital-storytelling', {
        templateUrl: 'templates/work/digital-storytelling.html'
      })
      .when('/work/simple-impactful-innovation', {
        templateUrl: 'templates/work/simple-impactful-innovation.html'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
}])

app.controller('ContactCtrl', function($scope){
  $scope.email = 'egonzalez78@gmail.com'
})


app.controller('TabCtrl', function($scope, $location){
  $scope.tab = 1;  //default to show first tab

  $scope.setTab = function(tab){
    $scope.tab = tab;
    $location.path('/');
  };

  $scope.isSet = function(checkTab){
    return $scope.tab === checkTab;
  };

});


})();

