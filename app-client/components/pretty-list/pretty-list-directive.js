var PrettyListDirective = function(){

  return {
    restrict:'E',
    replace:true,
    templateUrl:"components/pretty-list/pretty-list.html",
    transclude:true,
    scope:{
      listData:'=',
      fields:'=',
      idField:'@',
      includeDeleteButton:'@',
      includeEditButton:'@',
      includeAddNewButton:'@',
      itemDeleted:'&',
      itemEdited:'&'
    },
    controllerAs: 'ctrl',
    controller:function($scope){

      // triggered from the directive HTML
      this.itemEdited = function(id, index, value){
        $scope.itemEdited({id: id, item: index, value:value});
        $scope.listData[index].editing = false;
      }

      // triggered from the directive HTML
      this.editClicked = function(id, index){

        for(var i=0; i<$scope.listData.length; i++){
          $scope.listData[i].editing = false;
        }

        $scope.listData[index].editing = true;

      }

      // triggered from the directive HTML
      this.deleteClicked = function(id, index){
        $scope.itemDeleted({id: id, item: index});
      }

    }
  }

};


module.exports = PrettyListDirective;