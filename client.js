var soap = require('soap');
  var url = 'http://localhost:8000/APServiceService?wsdl';
  var args = {name: 'value'};
  soap.createClient(url, function(err, client) {
      console.log(client.describe() )
      client.APServiceService.IfAPService.DeptBinding(args, function(err, header, result, a) {
          console.log(err, header, result, a);
      });
  });