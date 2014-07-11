var PageNavController = function($scope, $location, PageNavDataService){

  $scope.pages = PageNavDataService.pages;

  $scope.navClicked = function(page){

    resetSelectedNavigation();
    page.active = true;
    $location.path('/' + page.location);
    console.log($location.path());

  };

  function resetSelectedNavigation (){
    angular.forEach($scope.pages, function(item) {
      item.active = false;
    });
  }

};

module.exports = PageNavController;