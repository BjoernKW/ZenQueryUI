'use strict';

describe('Controller: QueriesCtrl', function () {

  // load the controller's module
  beforeEach(module('zenQueryUiApp'));

  var queriesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    queriesCtrl = $controller('QueriesCtrl', {
      $scope: scope
    });
  }));

  it('should set default values', function () {
    expect(scope.configuration).not.toBe(null);
    expect(scope.filteredQueries.length).toBe(0);
    expect(scope.currentPage).toBe(1);
    expect(scope.itemsPerPage).toBe(5);
    expect(scope.maxSize).toBe(5);
  });
});
