http = require('http')
soap = require('soap')
var myService = {
      
      APServiceService: {
          IfAPService: {
              DeptBinding: function(args) {
                  console.log(args);
                  return {
                      DeptBindingReturn: 'DeptBinding'
                  };
              },
              corpBinding: function(args) {
                  console.log(args);
                  return {
                      name: 'corpBinding'
                  };
              },
              staffBinding: function(args) {
                  console.log(args);
                  return {
                      name: 'staffBinding'
                  };
              }
          }
      }
  }

  var xml = require('fs').readFileSync('IfAPService.wsdl', 'utf8'),
      server = http.createServer(function(request,response) {
          response.end("404: Not Found: "+request.url)
      });

  server.listen(8000);
  soap.listen(server, '/APServiceService', myService, xml);
