var afterhours =  producer.afterhours.getGlideObject().getQuestion().getLabel()  + " " + producer.afterhours + "\n";
// getglideobject is var holding the user input info
var dba = producer.dbascript.getGlideObject().getQuestion().getLabel() + " " + producer.dbascript + "\n";
var env = producer.env.getGlideObject().getQuestion().getLabel() + " " + producer.env + "\n";
var app = producer.u_application.getGlideObject().getQuestion().getLabel()  + " " + producer.u_application + "\n";
var comment = producer.addcomment.getGlideObject().getQuestion().getLabel()  + " " + producer.addcomment + "\n";
var dbaenv = producer.dbplatform.getGlideObject().getQuestion().getLabel()  + " " + producer.dbplatform + "\n";
var vn = producer.vn.getGlideObject().getQuestion().getLabel()  + " " + producer.vn + "\n";
var emv = producer.emv.getGlideObject().getQuestion().getLabel()  + " " + producer.emv + "\n";
var lbm = producer.ibm.getGlideObject().getQuestion().getLabel()  + " " + producer.lbmbm + "\n";
var ltc = producer.ltc.getGlideObject().getQuestion().getLabel()  + " " + producer.ltc + "\n";


//place all var that need to be in body into the array
var array = [afterhours, dba, env, app, comment, dbaenv, vn, emv, lbm, ltc ];


//var here are used to pass to the second ticket
var user = producer.caller_id.toString();
var app1 = producer.u_application.toString();
var time = producer.u_deployment_time.toString();


current.setValue('u_original_body', array.join(','));
current.setValue('short_description', 'Deployment of Application ' + app1);
//sends email to team awesome by firing event called emailawesome
//gs.eventQueue('emailawesome', current, '', '');




// /do not use === it will not work. Ignore any errors given by IDE
if( producer.Dbchange == 'true') {
    //creates ticket for DBA if db box is checked by user
    var newIncident = new GlideRecord('incident');
    newIncident.initialize();
    newIncident.setValue('u_original_body', array.join(','));
    newIncident.setValue('short_description', 'Deployment of Application ' + app1);
    newIncident.setValue('caller_id', user);
    newIncident.setValue('u_deployment_time', time);
    newIncident.setValue('assignment_group', '9e18226d9865e500d881f1819a175601');
    newIncident.setValue('state', '2');
    //will show var's this goes in the true block
    if (producer.bichange == 'true') {
        newIncident.setValue('watch_list', biteam);
    }

    else
    {

    }
    newIncident.parent = current.sys_id; //Link with parent
    newIncident.insert();
}

else {



}


if( producer.bichange == 'true') {
    //creates ticket for BI if Structural DB changes
    var newIncident = new GlideRecord('incident');
    newIncident.initialize();
    newIncident.setValue('u_original_body', array.join(','));
    newIncident.setValue('short_description', 'Deployment of Application ' + app1);
    newIncident.setValue('caller_id', user);
    newIncident.setValue('u_deployment_time', time);
    newIncident.setValue('assignment_group', '2930d07ed88821003ab6aae0a2d11a60');
    newIncident.setValue('state', '2');
    //will show var's this goes in the true block

    newIncident.parent = current.sys_id; //Link with parent
    newIncident.insert();



}

else  {


}
