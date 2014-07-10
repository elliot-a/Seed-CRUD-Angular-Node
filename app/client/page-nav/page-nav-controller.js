var PageNavController = function($scope, PageNavDataService){

  $scope.pages = PageNavDataService.pages;

};

module.exports = PageNavController;