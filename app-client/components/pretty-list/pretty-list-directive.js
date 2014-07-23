var PrettyListDirective = function(){

  return {
    restrict:'E',
    replace:true,
    templateUrl:"components/pretty-list/pretty-list.html",
    transclude:true,
    scope:{
      listData:'=',
      fields:'=',
      includeDeleteButton:'@',
      itemDeleted:'&'
    },
    controllerAs: 'ctrl',
    controller:function($scope){

      this.deleteClicked = function(index){
        $scope.itemDeleted({item: index});
      }

    }
  }

};


module.exports = PrettyListDirective;