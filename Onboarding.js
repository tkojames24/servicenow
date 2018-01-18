// getglideobject is var holding the user input info
var username = producer.username.getGlideObject().getQuestion().getLabel() + " " + producer.username + "\n";
var computer = producer.computer.getGlideObject().getQuestion().getLabel() + " " + producer.computer + "\n";
var poc = producer.poc.getGlideObject().getQuestion().getLabel()  + " " + producer.poc + "\n";
var request = producer.request.getGlideObject().getQuestion().getLabel()  + " " + producer.request + "\n";
var team = producer.team.getGlideObject().getQuestion().getLabel()  + " " + producer.team + "\n";
var staff = producer.staff.getGlideObject().getQuestion().getLabel()  + " " + producer.staff + "\n";
var sdt =  producer.sdt.getGlideObject().getQuestion().getLabel()  + " " + producer.sdt + "\n";




//place all var that need to be in body into the array
var array;
array = [username,computer,poc,request,team,staff];

current.setValue('u_original_body', array.join(','));
current.setValue('short_description', 'Onboarding needed for ' + username);
current.setValue('state', '2');
current.setValue('assignment_group', '4e5b457198764100cbc1404a443062ef');

