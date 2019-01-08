var r = new sn_ws.RESTMessageV2('JAMF', 'Default GET');
var response = r.execute();
var responseBody = response.getBody();
var httpStatus = response.getStatusCode();

var parser = new JSONParser();
var parsedData = parser.parse(responseBody);
var len = parsedData.computers.length;
gs.print(len);
for (var i = 0; i < len; i++) {
  var obj = parsedData.computers[i];
  var obj2 = JSON.stringify(obj);
  var parsedSecond = JSON.parse(obj2);

  var restGR = new GlideRecord('name of created  staging table); //Important
  restGR.initialize();
  restGR.u_make = parsedSecond.make;
  restGR.u_model = parsedSecond.model;
  restGR.u_serial_number = parsedSecond.serial_number;
  restGR.u_username = parsedSecond.username;
  restGR.sys_import_set = 'sysid of importset’; //Important
  restGR.insert();

}
