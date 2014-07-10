var PageNavDirective = function(){

  return {
    restrict:'A',
    replace:true,
    templateUrl:"page-nav/page-nav.html",
    link:function(scope, ele, attrs){
      console.log("PageNavDirective initialized");
    }
  }

};

module.exports = PageNavDirective;