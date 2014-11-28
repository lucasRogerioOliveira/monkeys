angular.module("app", ["ngResource", "ngRoute", "restangular"]).run(function($rootScope) {
  // adds some basic utilities to the $rootScope for debugging purposes
  $rootScope.log = function(thing) {
    console.log(thing);
  };

  $rootScope.alert = function(thing) {
    alert(thing);
  };
});

angular.module("app").config(function(RestangularProvider){
  RestangularProvider.setBaseUrl('/estags/');
});
