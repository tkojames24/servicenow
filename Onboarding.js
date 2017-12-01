var sdt =  producer.afterhours.getGlideObject().getQuestion().getLabel()  + " " + producer.sdt + "\n";
// getglideobject is var holding the user input info
var username = producer.dbascript.getGlideObject().getQuestion().getLabel() + " " + producer.username + "\n";
var computer = producer.env.getGlideObject().getQuestion().getLabel() + " " + producer.computer + "\n";
var poc = producer.u_application.getGlideObject().getQuestion().getLabel()  + " " + producer.poc + "\n";
var request = producer.addcomment.getGlideObject().getQuestion().getLabel()  + " " + producer.request + "\n";
var Team = producer.dbplatform.getGlideObject().getQuestion().getLabel()  + " " + producer.team + "\n";
var staff = producer.dbplatform.getGlideObject().getQuestion().getLabel()  + " " + producer.staff + "\n";


//place all var that need to be in body into the array
var array;
array = [sdt,username,computer,poc,request,Team,staff];




current.setValue('u_original_body', array.join(','));

