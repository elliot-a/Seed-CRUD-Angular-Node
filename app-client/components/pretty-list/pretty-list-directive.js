var PrettyListDirective = function(){

  return {
    restrict:'E',
    replace:true,
    templateUrl:"components/pretty-list/pretty-list.html",
    controllerAs: 'ctrl',
    controller:function($scope){

      this.deleteClicked = function(index){
        $scope.itemDeleted({item: index});
      }

    },
    scope:{
      listData:'=',
      fields:'=',
      includeDeleteButton:'@',
      itemDeleted:'&'
    }
  }

};



module.exports = PrettyListDirective;