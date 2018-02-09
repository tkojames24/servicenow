var jira = producer.jira.getGlideObject().getQuestion().getLabel() + " " + producer.jira + "\n";


var array = [jira];


current.setValue('u_original_body', array.join(','));



var email = new GlideRecord('sys_email');
email.initialize();
email.subject = array;
email.body    = array;
email.type    = 'send-ready';
email.sys_created_on = gs.now();
email.weight  = '60';
email.instance  = current.sys_id;//this may be wrong.. i modified this to post on here from a business rule in use I am using
email.recipients = "ejmathison@ucdavis.edu";
email.insert();

