(function(){
var app = angular.module('enrique', ['ngAnimate', 'ngRoute', 'ngDialog']);

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

app.controller('WorkCtrl', function ($scope, ngDialog) {
    $scope.openSurprise = function () {
      console.log("Surprise!");
      ngDialog.open({
        template: '/templates/work/modals/ds-surprise.html',
        className: 'ngdialog-theme-default'
      });
    };

});

app.controller('TestCtrl', function ($scope, ngDialog) {

   $scope.openTest = function () {
      console.log("Test!");
      ngDialog.open({
        template: '/templates/work/modals/ds-test.html',
        className: 'ngdialog-theme-default'
      });
    };

});

})();

