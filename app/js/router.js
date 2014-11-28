angular.module("app").config(function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider.when('/login', {
    templateUrl: 'login.html',
    controller: 'LoginController'
  });

  $routeProvider.when('/home', {
    templateUrl: 'home.html',
    controller: 'HomeController'
  });

  $routeProvider.when('/$resource/list-of-books', {
    templateUrl: 'books_resource.html',
    controller: 'BooksResourceController'
  });

  $routeProvider.when('/$http/list-of-books', {
    templateUrl: 'books_http.html',
    controller: 'BooksHttpController',
    resolve: {
      books: function(BookService) {
        return BookService.getBooks();
      }
    }
  });

  $routeProvider.when('/monkeys', {
    templateUrl: 'monkeys/index.html',
    controller: 'MonkeysController'
  });

  $routeProvider.when('/monkeys/new', {
    templateUrl: 'monkeys/create.html',
    controller: 'MonkeysNewController'
  });

  $routeProvider.when('/monkeys/edit/:id', {
    templateUrl: 'monkeys/create.html',
    controller: 'MonkeysEditController'
  });

  $routeProvider.otherwise({ redirectTo: '/login' });

});
