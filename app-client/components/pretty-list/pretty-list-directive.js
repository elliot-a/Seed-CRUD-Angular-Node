var PrettyListDirective = function(){

  return {
    restrict:'A',
    replace:true,
    templateUrl:"components/pretty-list/pretty-list.html",
    link:function(scope, ele, attrs){

    },
    scope:{
      listData:'=',
      fields:'='
    }
  }

};

module.exports = PrettyListDirective;