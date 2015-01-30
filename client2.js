var soap = require('soap');
var _ = require('lodash-node/compat');

var url = "http://wsf.cdyne.com/WeatherWS/Weather.asmx?WSDL";

var args = {};

soap.createClient(url, function(err, client){
  console.log(client.describe() )
  client.Weather.WeatherSoap.GetWeatherInformation(args, function(err, result){
    if (err) throw err;
    _.map(result.GetWeatherInformationResult.WeatherDescription, function(r) {
      console.log(r);
    })

  });
});