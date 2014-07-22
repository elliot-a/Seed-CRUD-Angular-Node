var HomeController = function($scope, apiConnect){

    var _this = this;

    this.listFields = ["author", "text"];
    this.listQuotes = [];

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