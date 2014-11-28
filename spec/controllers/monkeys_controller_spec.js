describe('controller: MonkeysController', function(){
  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($controller, $rootScope, $location, $httpBackend) {
    this.$location = $location;
    this.$httpBackend = $httpBackend;
    this.scope = $rootScope.$new();
    this.redirect = spyOn($location, 'path');
    this.$controller = $controller;
  }));

  afterEach(function() {
    this.$httpBackend.verifyNoOutstandingRequest();
    this.$httpBackend.verifyNoOutstandingExpectation();
  });

  describe("monkeys' index", function() {
    it("should get a list of monkeys", function() {
      this.$controller('MonkeysController', {
        $scope: this.scope
      });

      var response = [{id: 1, specie: 'test 1'}, {id: 2, specie: 'specie 2'}];

      this.$httpBackend.when('GET', '/estags/monkeys').respond(response);
      this.$httpBackend.expectGET('/estags/monkeys');
      this.$httpBackend.flush();

      expect(this.scope.monkeys.length).toEqual(2);
      expect(this.scope.monkeys[0].id).toEqual(response[0].id);
    });
  });
});
