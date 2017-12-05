var sdt =  producer.sdt.getGlideObject().getQuestion().getLabel()  + " " + producer.sdt + "\n";
// getglideobject is var holding the user input info
var username = producer.username.getGlideObject().getQuestion().getLabel() + " " + producer.username + "\n";
var computer = producer.computer.getGlideObject().getQuestion().getLabel() + " " + producer.computer + "\n";
var poc = producer.poc.getGlideObject().getQuestion().getLabel()  + " " + producer.poc + "\n";
var request = producer.request.getGlideObject().getQuestion().getLabel()  + " " + producer.request + "\n";
var Team = producer.Team.getGlideObject().getQuestion().getLabel()  + " " + producer.team + "\n";
var staff = producer.staff.getGlideObject().getQuestion().getLabel()  + " " + producer.staff + "\n";


//place all var that need to be in body into the array
var array;
array = [sdt,username,computer,poc,request,Team,staff];


current.setValue('u_original_body', array.join(','));