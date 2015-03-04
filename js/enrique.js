(function(){
var app = angular.module('enrique', []);

app.controller('TabController', function(){
  this.tab = 1;  //default to show first tab

  this.setTab = function(tab){
    this.tab = tab;
  };

  this.isSet = function(checkTab){
    return this.tab === checkTab;
  };

});
})();
