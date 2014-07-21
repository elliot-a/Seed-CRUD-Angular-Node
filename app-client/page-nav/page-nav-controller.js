var PageNavController = function($scope, $location, data){

  $scope.pages = data.pages;

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

PageNavController['$inject'] = ['$scope', '$location', 'PageNavDataService'];

module.exports = PageNavController;