var HomeController = function($scope, apiConnect){

    var _this = this;

    this.listFields = ["author", "text"];
    this.listQuotes = [];

    this.itemDeleteClicked = function(item){
      this.listQuotes.splice(item, 1);
      apiConnect.quote.delete({id:item}, onDelete, onError);
    };

    var onDelete = function(){
      console.log("item deleted on server");
    };

    var onResponse = function(resp){
      _this.listQuotes = resp
    };

    var onError = function(err){
      console.log(err);
    };


    apiConnect.quotes.query({}, onResponse, onError);

};

// Inject our dependencies
HomeController['$inject'] = ['$scope', 'APIConnectService'];

module.exports = HomeController;