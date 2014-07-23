var HomeController = function($scope, apiConnect){

    var _this = this;

    this.listFields = ["author", "text"];
    this.listQuotes = [];


    this.itemDeleteClicked = function(item){

      // remove the quote item from the local list - as this is bound to our directive the view will auto update
      this.listQuotes.splice(item, 1);

      // remove the quote item from the server
      apiConnect.quote.delete({id:item}, onDelete, onError);
    };


    // request the quote list from the server
    apiConnect.quotes.query({}, onResponse, onError);


    function onDelete () {
      console.log("item deleted on server");
    }

    function onResponse (resp){
      _this.listQuotes = resp
    }

    function onError (err){
      console.log(err);
    }

};

// Inject our dependencies
HomeController['$inject'] = ['$scope', 'APIConnectService'];

module.exports = HomeController;