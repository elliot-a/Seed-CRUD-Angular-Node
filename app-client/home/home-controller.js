var HomeController = function($scope, apiConnect){

    var _this = this;

    this.listFields = ["author", "text"];
    this.listQuotes = [];


    this.itemEdited = function(id, index, value){

      console.log(id, index, value);

      var newObject = {"author" : "You", "text" : value};

      this.listQuotes[index] = newObject;

      apiConnect.quote.save({id:id}, newObject, onEdited, onError);

    }


    this.itemDeleteClicked = function(id, index){

      // remove the quote item from the local list - as this is bound to our directive the view will auto update
      this.listQuotes.splice(index, 1);

      // remove the quote item from the server
      apiConnect.quote.delete({id:id}, onDelete, onError);
    };


    // request the quote list from the server
    apiConnect.quotes.query({}, onResponse, onError);

    function onEdited () {
      console.log("item edited on the server");
    }

    function onDelete () {
      console.log("item deleted on the server");
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