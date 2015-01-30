var http = require('http')
var soap = require('soap')
var myService = {
  APServiceService: {
    IfAPService: {
      DeptBinding: function (args) {
        return {
          DeptBindingReturn: 'Dept_Binding'
        };
      },
      corpBinding: function (args) {
        return {
          corpBindingReturn: 'Corp_Binding'
        };
      },
      staffBinding: function (args) {
        return {
          staffBindingReturn: 'Staff_Binding'
        };
      }
    }
  }
}

var xml = require('fs').readFileSync('IfAPService.wsdl', 'utf8'),
  server = http.createServer(function (request, response) {
    response.end("404: Not Found: " + request.url)
  });

server.listen(8000);
soap.listen(server, '/', myService, xml);
