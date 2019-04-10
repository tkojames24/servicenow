{
    var short1 = current.short_description.replace(/(\r\n|\n|\r|['"])/gm,", ");
    // .replace removes /n after new lines as jira gets mad with mutli line do not touch. Also removes "" as Jira gets mad. 
    var body1 = current.u_original_body.replace(/(\r\n|\n|\r|['"])/gm,", ");
    // post url of ticket into the bottom of the jira issue. Space is important creates it on new line 
    var url = " put in url of jira instance" + current.sys_id; 
    var number = current.number; // Gets INC number of current ticket
    var sd = number +  ' ' + short1; // This is the info tab of the jira post
    var body = body1 + url; // This is the body of the ticket and ticket url which gets posted in JIRA body.
    //var bug = "Bug";   You Can use these  VARS so switch between issues types in Jira, Story or Bug etc
    //var story = "Story";
    //custom value created on ci table for each app 
    // This pulls the unique ProjectID field that was created on assigment group table. You must get the ID from JIRA and add it in for each project
    var projectid = current.assignment_group.u_jira_id;
    var group = current.assignment_group;
        try { 
            var r = new sn_ws.RESTMessageV2('Jira', 'Jira POST');
            //  here match ${vars} in the content section of outbound rest message
            r.setStringParameterNoEscape('info', sd);
            r.setStringParameterNoEscape('body', body);
            r.setStringParameterNoEscape('id', projectid);
            // this checks if the assignment group is one the selected and if so changed the issue type
            //if(group == "SYSID of group goes here"){
            //r.setStringParameterNoEscape('type', story);
            // all other groups will have the type set to bug    
            //} else {
            r.setStringParameterNoEscape('type',bug);
            
             
                    //}
            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();
            // this var stores the respone from Jira included the unique ID of the issue we created.
            var parsedData = JSON.parse(responseBody);
            //this checks the status code of the return message anything other than success posted throws an error
            if(httpStatus === 201){
	        current.work_notes = "This incident has been sent to Jira " + parsedData.key  + '\n' + 'https://yourjirainstanceurl.atlassian.net/browse/'+ parsedData.key;
        } else{
            current.work_notes = "Error! Jira Issue has been not sent. Please contact support.";
            

        }

            current.update();
            // This takes you back to the ticket you were on instead of just taking you to the incident table 
            action.setRedirectURL(previous);
            // logs if there any errors
            gs.log(response.getBody());
           }
           catch(ex) {
            var message = ex.message;
           }
        }
