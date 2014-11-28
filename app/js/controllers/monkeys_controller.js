(function(){
  angular.module("app").controller("MonkeysController", function($scope, Restangular){

    Restangular.all('monkeys').getList().then(function(monkeys){
      $scope.monkeys = monkeys;
    });

    $scope.destroy = function(monkey){
      angular.forEach($scope.monkeys, function(item, index){
        if(item.id === monkey.id){
          monkey.doDELETE().then(function(){
            $scope.monkeys = $scope.monkeys.slice(index, 0);
            return;
          });
        }
      });
    };
  });

  angular.module("app").controller("MonkeysEditController", function($scope, $location, $routeParams, Restangular){

    Restangular.one('monkeys/edit' , $routeParams.id).get().then(function(monkey){
      $scope.monkey = monkey;
    });

    $scope.save = function(monkey){
      monkey.post().then(function(){
        $location.path('/monkeys');
      });
    };

  });

  angular.module("app").controller("MonkeysNewController", function($scope, $location, Restangular){
    Restangular.one('monkeys', 'new').get().then(function(monkey){
      $scope.monkey = monkey;
    });

    $scope.save = function(monkey){
      monkey.post().then(function(){
        $location.path('/monkeys');
      });
    };



    Restangular.one('monkeys', '{{id}}').get().then(function(monkey){
      $scope.monkey = monkey;
    });
    
  });

})();
