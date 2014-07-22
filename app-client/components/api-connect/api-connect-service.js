var APIConnectService = function($resource, config){

  return {
    quote     :  $resource(config.baseURL+"quote/:id"),
    quotes    :  $resource(config.baseURL+"quote/")
  }

};

// Inject our dependencies
APIConnectService['$inject'] = ['$resource', 'APIConnectConfigService'];

module.exports = APIConnectService;