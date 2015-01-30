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

var port = Number(process.env.PORT || 5000);
server.listen(port);
soap.listen(server, '/', myService, xml);
