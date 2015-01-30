var soap = require('soap');
var url = 'http://localhost:8000/?wsdl';
var args = {};
soap.createClient(url, function (err, client) {
  console.log(client.describe())
  client.DeptBinding(args, function (err, result, xml) {
    if (err) throw err;
    console.log(result, xml);
  });
  client.corpBinding(args, function (err, result, xml) {
    if (err) throw err;
    console.log(result, xml);
  });
  client.staffBinding(args, function (err, result, xml) {
    if (err) throw err;
    console.log(result, xml);
  });
});