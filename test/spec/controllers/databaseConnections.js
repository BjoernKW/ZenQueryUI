'use strict';

describe('Controller: DatabaseConnectionsCtrl', function () {

  // load the controller's module
  beforeEach(module('zenQueryUiApp'));

  var DatabaseConnectionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatabaseConnectionsCtrl = $controller('DatabaseConnectionsCtrl', {
      $scope: scope
    });
  }));

  it('should set default values', function () {
    expect(scope.configuration).not.toBe(null);
    expect(scope.filteredDatabaseConnections.length).toBe(0);
    expect(scope.currentPage).toBe(1);
    expect(scope.itemsPerPage).toBe(5);
    expect(scope.maxSize).toBe(5);
  });
});
