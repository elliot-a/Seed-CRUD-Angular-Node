var HomeController = function($scope, apiConnect){

    var onResponse = function(resp){
      console.log(resp);

      resp.author = "elliot agro";

      resp.$save({id:1});

    };

    var onError = function(err){
      console.log(err);
    };

    apiConnect.quote.get({id:1}, onResponse, onError);

    var tim = setTimeout(function(){
      apiConnect.quote.get({id:1}, onResponse, onError);
    }, 2000)

};

HomeController['$inject'] = ['$scope', 'APIConnectService'];

module.exports = HomeController;