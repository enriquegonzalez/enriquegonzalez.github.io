(function(){
var app = angular.module('enrique', ['ngAnimate', 'ui.router']);

app.config(['$urlRouterProvider', '$stateProvider',
  function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
    .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/work/work.html'
      })
      .state('prototyping', {
        url: '/work/gravitytank-feedback',
        templateUrl: 'templates/work/gravitytank-feedback.html'
      })
      .state('storytelling', {
        url: '/work/digital-storytelling',
        templateUrl: 'templates/work/digital-storytelling.html'
      })
      .state('innovation', {
        url: '/work/simple-impactful-innovation',
        templateUrl: 'templates/work/simple-impactful-innovation.html'
      })
      .state('educational', {
        url: '/work/educational-product-design',
        templateUrl: 'templates/work/educational-product-design.html'
      });


}]);

app.controller('ContactCtrl', function($scope){
  $scope.email = 'egonzalez78@gmail.com'
});


app.controller('TabCtrl', function($scope, $location){
  $scope.tab = 1;  //default to show first tab
  $scope.pageScroll = false;

  $scope.setTab = function(tab){
    $scope.tab = tab;
    $location.path('/');
  };

  $scope.isSet = function(checkTab){
    return $scope.tab === checkTab;
  };

  $scope.setPageScroll = function(scroll){
    $scope.pageScroll = scroll;
  }

});


})();

