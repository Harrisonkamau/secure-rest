myApp.directive('printThis', function() {

  var directiveDefinitionObject = {
    restrict: 'EA',
    template: '<input ng-model="data" placeholder="Type here"/> {{ data }}'
  }

  return directiveDefinitionObject;
});
